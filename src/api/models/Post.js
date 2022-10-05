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

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  url: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number , default: 0 },
  usersLiked: {type:[{     type: mongoose.Schema.Types.ObjectId,
    ref: "User", }], default:[]},
  usersDisliked:{type:[{     type: mongoose.Schema.Types.ObjectId,
    ref: "User", }], default:[]},
  author: {
    //recupere l'user concerné par la création du post et l'affiche
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
},{
  timestamps: true,
},);

const Post =
  mongoose.models.Post || mongoose.model("Post", postSchema, "posts");

export default Post;
