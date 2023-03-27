import processFile from "../middlewares/upload";
import { format } from "util";
import { Request, Response } from 'express';
import { Storage } from "@google-cloud/storage";
import Logger from "./logger";
// Instantiate a storage client with credentials
const storage = new Storage({ keyFilename: "google-cloud-key.json" });
const bucket = storage.bucket("imagenes-hackathon");

const logger = Logger.create('backend:upload-file')

export const upload = async (req: any, res: Response) => {
  try {
    await processFile(req, res);

    if (!req.file) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    req.file.originalname = `${req.body.numerodedocumento}-${req.file.originalname}`;
    logger.info('Subiendo el archivo', req.file.originalname)

    // Create a new blob in the bucket and upload the file data.
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on("error", (err) => {
      res.status(500).send({ message: err.message });
    });

    blobStream.on("finish", async (data) => {
      // Create URL for directly file access via HTTP.
      const publicUrl = format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      );

      try {
        // Make the file public
        await bucket.file(req.file.originalname).makePublic();
      } catch {
        return res.status(500).send({
          message:
            `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
          url: publicUrl,
        });
      }

      res.status(200).send({
        message: "Uploaded the file successfully: " + req.file.originalname,
        url: publicUrl,
      });
    });

    blobStream.end(req.file.buffer);
  } catch (err: any) {
    logger.error('Error:', req.file)
    logger.error('Error:', err.message)
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size is too large.",
      });
    }
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

export const download = async (req: any, res: Response) => {
  try {
    logger.info('Descargando el archivo', req.query.name)
    const [metaData] = await bucket.file(req.query.name).getMetadata();
    res.redirect(metaData.mediaLink);
    
  } catch (err) {
    res.status(500).send({
      message: "Could not download the file. " + err,
    });
  }
};

