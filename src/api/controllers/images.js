export async function postImage(req, res, next) {
  console.log(req.file.filename);

  let imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;
  res.status(201).json({ imageUrl: imageUrl });

  // retourne l'url de l'image
}
