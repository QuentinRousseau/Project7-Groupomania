import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    url: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    usersDisliked: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    author: {
      //recupere l'user concerné par la création du post et l'affiche
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(softDelete, { deletedAt: true, overrideMethods: true });

const Post =
  mongoose.models.Post || mongoose.model("Post", postSchema, "posts");

export default Post;
