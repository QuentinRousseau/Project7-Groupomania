export async function postImage(req, res, next) {
  // console.log(req.file.filename); name's file 

  let imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;//create url file with the name 
  res.status(201).json({ imageUrl: imageUrl }); 

  // return url's image
}
