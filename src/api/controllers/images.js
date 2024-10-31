export async function postImage(req, res, next) {
  console.warn(`voici l'URL de requete : ${req.get("host")}/images`)
  let imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename
    }`; //create url file with the name
  res.status(201).json({ imageUrl: imageUrl });

  // return url's image
}
