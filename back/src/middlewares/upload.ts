import { promisify } from "util";
import Multer, { memoryStorage } from "multer";

let processFile = Multer({
  storage: memoryStorage(),
  limits: { fieldSize: 10 * 1024 * 1024 }
}).single("file");

let processFileMiddleware = promisify(processFile);

export default processFileMiddleware;
