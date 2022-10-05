import mongoose from "mongoose";
import softDelete from "mongoose-delete";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema(
  {
    tag: { type: String, require: true },
    name: { type: String },
    // avatar: { type: String },
    account: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    //
    // tag:{type:String},
    // posts: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Post",
    //   },
    // ],
  },
  { timestamps: { createdAt: "created_at" } }
);

userSchema.plugin(uniqueValidator);

mongoose.plugin(softDelete, { deletedAt: true, overrideMethods: true });

const User =
  mongoose.models.User || mongoose.model("User", userSchema, "users");
export default User;
