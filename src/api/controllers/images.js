import { faDiagramNext } from "@fortawesome/free-solid-svg-icons";

export async function postImage(req,next, res) {
  try{
    let imageObject = req.body;
let imageUrl = req.body.file;
console.log(req.body)    ;
next();
  }catch (error){
    res.status(401).json({error});
    
  }
    
    // retourne l'url de l'image
}