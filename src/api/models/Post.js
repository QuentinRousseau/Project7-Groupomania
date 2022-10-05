import mongoose from "mongoose";

/*
const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  postContent: { type: String, required: true },
  imageUrl: { type: String, required: true },
  creationDate: { type: Number, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);*/

const postSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    url: { type: String, required: true },
    likes: { type: Number },
    dislikes: { type: Number },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] },
    author: {
      //recupere l'user concerné par la création du post et l'affiche
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Post =
  mongoose.models.Post || mongoose.model("Post", postSchema, "posts");

export default Post;
