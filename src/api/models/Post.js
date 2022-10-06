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
      autopopulate: true,
    },
    usersDisliked: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: [],
      autopopulate: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      autopopulate: true,
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
