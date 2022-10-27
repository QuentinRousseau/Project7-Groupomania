import Post from "../models/Post";
import fs from "fs";
import User from "../models/User";

import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import softDelete from "mongoose-delete";

export async function getAllPosts(req, res, next) {
  //  Search all Posts named "posts"
  try {
    const posts = await Post.find().then((posts) => {
      res.status(200).json(posts);
    });
  } catch (error) {
    res.status(400).json({ error });
    throw new Error("no posts find ! ");
  }
}

export async function createPost(req, res, next) {
  //  Create const postObject for Object "Post" creating
  if (req.auth.userId !== req.body.author)
    return res.status(400).json("Not Authorized");

  let postObject = req.body;
  console.log(" Verif du post a l'entrée", postObject); // decoupe la requete en plusieurs champs
  delete postObject._id; // remove id

  console.log("Vérif du post modifié", postObject);

  const post = new Post({
    ...postObject, // Creating Object post with request datas & userId & Url image
    author: req.auth.userId,
  });
  console.log("Vérif du post une fois créé et fini", post);
  await post // await post creation before saving
    .save()
    .catch((error) => {
      res.status(400).json({ error });
    })
    .then(() => res.status(201).json({ message: "Objet enregistré !" }));
}

export async function modifyPost(req, res, next) {
  console.log("Requete  : ", req.body);
  console.log("Authorization   :", req.auth);
  console.log("Params   :", req.params);
  const postObject = await req.body;
  console.log(postObject);

  let post = await Post.findOne({ id: req.params.id });

  console.log(" c'est mon post trouvé ", post);

  if (!post) return res.status(400).json({ error: "Post not find" });

  console.log(req.body.author._id != req.auth.userId || req.auth.isAdmin);

  if ((req.auth.admin = false && req.body.author._id != req.auth.userId))
    return res.status(401).json({ error: "Not authorized" });
  Post.updateOne(
    { _id: req.params.id },
    { ...postObject, _id: req.params.id },
    { updatedAt: Date.now() }
  )
    .then(() => res.status(200).json({ message: "Post modified !" }))
    .catch((error) => res.status(401).json({ error }));
}

export async function deletePost(req, res, next) {
  // Authorization check
  if ((req.auth.admin = false && req.body.author._id != req.auth.userId))
    return res.status(401).json({ error: "Not authorized" });

  // Find post & change boolean "deleted"
  const post = await Post.findByIdAndUpdate(
    { _id: req.params.id },
    { deleted: true }
  );

  if (!post) return res.status(400).json({ error: "Post not found !" });

  res.status(200).json({ message: "Objet supprimé !" });
}

//Fonction pour liker et disliker un post

export async function likeOrDislike(req, res, next) {
  // getsauceId => const myPost
  // hasLike => myPost.userliked.includes(userId)
  // hasDislike => myPost.userdisLiked.includes(userId)
  // if(hasLike) => enlever l'user de la liste et enlever 1 au compteur de like
  // if(hasDislike) => enlever l'user de la liste et enlever 1 au compteur de dislike
  //  if(like === 1) => ajouter l'user a la liste et ajouter 1 au au compteur de like
  //  if(like === -1) => ajouter l'user a la liste et ajouter 1 au compteur de dislike
  // sauvegarde sur mongoDB => myPost.save()
  // res.status(200).json(message:" updated !");

  const like = req.body.like; // 1 || 0 || -1
  const userId = new ObjectId(req.auth.userId); // recupere l'userid qui est connecté
  const postId = req.params.id; // id du post recupéré dans l'url de la requete
  const myPost = await Post.findById(postId); // recherche du post concernée par la req
  const hasLike = myPost.usersLiked.includes(userId); // vérifie que l'utilisateur est présent dans la liste "likes"
  const hasDislike = myPost.usersDisliked.includes(userId); //vérifie que l'utilisateur est présent dans la liste "likes"
  let action = "neutral";
  //a voir pour une refactorisation plus performante

  // gestion du like === 0 et reset de la requete user
  if (hasLike)
    myPost.usersLiked = myPost.usersLiked.filter(
      (id) => id.valueOf() !== userId.valueOf()
    );
  if (hasDislike)
    myPost.usersDisliked = myPost.usersDisliked.filter(
      (id) => id.valueOf() !== userId.valueOf()
    );

  // cas de like
  if (like === 1 && !hasLike) {
    myPost.usersLiked.push(userId);
    action = "liked";
  }

  // cas de dislike
  if (like === -1 && !hasDislike) {
    myPost.usersDisliked.push(userId);
    action = "disliked";
  }
  myPost.likes = myPost.usersLiked.length;
  myPost.dislikes = myPost.usersDisliked.length;

  //sauvegarde des likes/dislikes de la sauce
  await myPost.save().catch((error) => res.status(401).json({ error }));

  res.status(200).json({
    message: " likes update !",
    data: { likes: myPost.likes, dislikes: myPost.dislikes, action },
  });
}
