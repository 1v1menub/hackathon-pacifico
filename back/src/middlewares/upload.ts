import { promisify } from "util";
import Multer, { memoryStorage } from "multer";
const maxSize = 2 * 1024 * 1024;

let processFile = Multer({
  storage: memoryStorage(),
  limits: { fileSize: maxSize },
}).single("file");

let processFileMiddleware = promisify(processFile);

export default processFileMiddleware;
