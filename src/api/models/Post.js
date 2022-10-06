import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";
import softDelete from "mongoose-delete";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
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
    },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(softDelete, { deletedAt: true, overrideMethods: true });
mongoose.plugin(mongooseAutoPopulate);

const Post =
  mongoose.models.Post || mongoose.model("Post", postSchema, "posts");

export default Post;
