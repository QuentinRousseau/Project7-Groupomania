import Post from "../models/Post";
import fs from "fs";
import User from "../models/User";
import mongoose from "mongoose";

//Example of populate()

// export function getUserWithPosts(username) {
//   return User.findOne({ username: username })
//     .populate("posts")
//     .exec((err, posts) => {
//       console.log("Populated User " + posts);
//     });
// }

export async function getAllPosts(req, res, next) {
  //  Search all Posts named "posts"
  try {
    const posts = await Post.find().then((posts) => {
      console.log(posts);
      res.status(200).json(posts);
    });
  } catch (error) {
    res.status(400).json({ error });
    throw new Error("no posts find ! ");
  }
}

export async function createPost(req, res, next) {
  //  Checking of datas in request
  console.log("vérif de la data recue ! ");
  console.log("req.body", req.body);
  console.log("user", req.auth.userId);

  //  Create const postObject for Object "Post" creating
  let postObject = req.body;
  console.log(" Verif du post a l'entrée", postObject); // check request
  delete postObject._id; // remove id 
  delete postObject._userId; // remove userId 
  console.log("Vérif du post modifié", postObject); //  Check  postObject after modification

  const user = await User.findOne({ user: req.auth.userId });
  console.log("nom du user trouvé", user.name); // Search user in the DB with de Account's id
  // => voir ce qui bug, ressort toujours le premier compte créé

  const post = new Post({
    ...postObject, // Creating Object post with request datas & userId & Url image
     author: user, //mongoose.Types.ObjectId(user), le Types.ObjectId ressort un "null"
  });
  console.log("Vérif du post une fois créé et fini", post);
  await post // await post creation before saving 
    .save()
    .catch((error) => {
      res.status(400).json({ error });
    })
    .then(() => res.status(201).json({ message: "Objet enregistré !" }));
}

// modifier la fonction pour séparer l'image ou la modifier , ainsi que le post
export async function modifyPost(req, res, next) {
  const postObject = (await req.file)
    ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete postObject._userId;
  let post = await Post.findOne({ _id: req.params.id });
  if (!post) return res.status(400).json({ error: "Post not find" });
  if (post.userId != req.auth.userId)
    return res.status(401).json({ error: "Not authorized" });
  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Post modified !" }))
    .catch((error) => res.status(401).json({ error }));
}

// modifier la fonction pour selectionner le bon post a supprimer
export async function deletePost(req, res, next) {
  const post = await Post.findOne({ _id: req.params.id });

  if (!post) return res.status(400).json({ error: "Post not found !" });

  if (post.userId != req.auth.userId)
    return res.status(401).json({ error: "Not authorized" });

  const filename = post.imageUrl.split("images/")[1];

  await fs.promises.unlink(`images/${filename}`);

  await Post.deleteOne({ _id: req.params.id }).catch((error) => {
    throw res.status(401).json({ error });
  });

  res.status(200).json({ message: "Objet supprimé !" });
}

//Fonction pour liker et disliker un post

// export async function likeOrDislike(req, res, next) {
//   // getsauceId => const myPost
//   // hasLike => myPost.userliked.includes(userId)
//   // hasDislike => myPost.userdisLiked.includes(userId)
//   // if(hasLike) => enlever l'user de la liste et enlever 1 au compteur de like
//   // if(hasDislike) => enlever l'user de la liste et enlever 1 au compteur de dislike
//   //  if(like === 1) => ajouter l'user a la liste et ajouter 1 au au compteur de like
//   //  if(like === -1) => ajouter l'user a la liste et ajouter 1 au compteur de dislike
//   // sauvegarde sur mongoDB => myPost.save()
//   // res.status(200).json(message:" updated !");

//   const like = req.body.like; // 1 || 0 || -1
//   const userId = req.auth.userId; // recupere l'userid qui est connecté
//   const postId = req.params.id; // id de la sauce recupéré dans l'url de la requete
//   const myPost = await Post.findById(postId); // recherche la sauce concernée par la req
//   const hasLike = myPost.usersLiked.includes(userId); // vérifie que l'utilisateur est présent dans la liste "likes"
//   const hasDislike = myPost.usersDisliked.includes(userId); //vérifie que l'utilisateur est présent dans la liste "likes"

//   //a voir pour une refactorisation plus performante

//   // gestion du like === 0 et reset de la requete user
//   if (hasLike) {
//     myPost.likes = myPost.likes - 1;
//     myPost.usersLiked = myPost.usersLiked.filter((id) => id !== userId);
//   }
//   if (hasDislike) {
//     myPost.dislikes = myPost.dislikes - 1;
//     myPost.usersDisliked = myPost.usersDisliked.filter((id) => id !== userId);
//   }

//   // cas de like
//   if (like === 1) {
//     myPost.likes = myPost.likes + 1;
//     myPost.usersLiked.push(userId);
//   }

//   // cas de dislike
//   if (like === -1) {
//     myPost.dislikes = myPost.dislikes + 1;
//     myPost.usersDisliked.push(userId);
//   }
//   //sauvegarde des likes/dislikes de la sauce
//   await myPost.save().catch((error) => res.status(401).json({ error }));

//   res.status(200).json({ message: " likes update !" });
// }
