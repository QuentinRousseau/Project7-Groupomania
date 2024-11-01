import fs from "fs";
import multer from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
export const __dirname = dirname(fileURLToPath(import.meta.url));

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/svg": "svg",
};
// BUG TO RESOLVE -> find the good path to save a images.
export const savePath = path.resolve("/opt/render/project/src/build/images")

fs.promises.mkdir(savePath).catch(console.error); //Creating a file "Images" if this file doesn't exist

console.log("check image folder : ", savePath); // Check of file exist
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, savePath);
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

export default multer({ storage: storage }).single("image");
