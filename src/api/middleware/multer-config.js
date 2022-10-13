import multer from "multer";
import path from "path";
import fs from "fs";

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/svg": "svg",
};

await fs.promises.mkdir(path.resolve("./public/images/")).catch(console.error);  //Creating a file "Images" if this file doesn't exist


console.log("check image folder", path.resolve("./public/images/")); // Check of file exist
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // console.log("Récupération de l'image",file.originalname)
    callback(null, path.resolve("./public/images/"));
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
    // console.log("fin de la création de l'image et sauvegarde effectuée",callback)
  },
});

export default multer({ storage: storage }).single("image");
