import Post from "../models/Post";
import fs from "fs";

//Dernier ajout de fonction pour rattacher l'user et ses posts

export function getUserWithPosts(username) {
  return User.findOne({ username: username })
    .populate("posts")
    .exec((err, posts) => {
      console.log("Populated User " + posts);
    });
}

// Fonctions déjà existantes

export async function getAllPosts(req, res, next) {
  try {
    const posts = await Post.find().then((posts) => {
      res.status(200).json(posts);
    });
  } catch (error) {
    res.status(400).json({ error });
    throw new Error("no posts find ! ");
  }
}

export async function getOnePost(req, res, next) {
  await Post.findOne({ _id: req.params.id })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
}

export async function createPost(req, res, next) {
  let postObject = await JSON.parse(req.body.post);
  console.log(postObject); // decoupe la requete en plusieurs champs
  delete postObject._id; // enleve l'id pour la remplacer plus tard
  delete postObject._userId; // enleve l'userId pour l'attribuer plus tard
  console.log(postObject);
  const post = new Post({
    ...postObject, // creation d'un objet post en attribuant les champs de la requete + l'userId (l'utilisateur qui cree la post) et la creation de l'URL de l'image
    userId: req.auth.userId, // creation des compteurs likes et dislikes, ainsi que des tableau rassemblant la liste des utilisateurs
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    usersDisliked: [],
  });
  console.log(post);
  await post // on attends la creation de l'objet, pour le sauvegarder, et si probleme apparait, le catch pour envoyer un message d'erreur sinon renvoyer un msg objet cree
    .save()
    .catch((error) => {
      res.status(400).json({ error });
    })
    .then(() => res.status(201).json({ message: "Objet enregistré !" }));
}

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
  const userId = req.auth.userId; // recupere l'userid qui est connecté
  const postId = req.params.id; // id de la sauce recupéré dans l'url de la requete
  const myPost = await Post.findById(postId); // recherche la sauce concernée par la req
  const hasLike = myPost.usersLiked.includes(userId); // vérifie que l'utilisateur est présent dans la liste "likes"
  const hasDislike = myPost.usersDisliked.includes(userId); //vérifie que l'utilisateur est présent dans la liste "likes"

  //a voir pour une refactorisation plus performante

  // gestion du like === 0 et reset de la requete user
  if (hasLike) {
    myPost.likes = myPost.likes - 1;
    myPost.usersLiked = myPost.usersLiked.filter((id) => id !== userId);
  }
  if (hasDislike) {
    myPost.dislikes = myPost.dislikes - 1;
    myPost.usersDisliked = myPost.usersDisliked.filter((id) => id !== userId);
  }

  // cas de like
  if (like === 1) {
    myPost.likes = myPost.likes + 1;
    myPost.usersLiked.push(userId);
  }

  // cas de dislike
  if (like === -1) {
    myPost.dislikes = myPost.dislikes + 1;
    myPost.usersDisliked.push(userId);
  }
  //sauvegarde des likes/dislikes de la sauce
  await myPost.save().catch((error) => res.status(401).json({ error }));

  res.status(200).json({ message: " likes update !" });
}
