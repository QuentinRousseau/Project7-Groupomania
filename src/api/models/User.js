import mongoose from "mongoose";
import softDelete from "mongoose-delete";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
},{
  timestamps: true,
},);

userSchema.plugin(uniqueValidator);

mongoose.plugin(softDelete, { deletedAt: true, overrideMethods: true });

const User =
  mongoose.models.User || mongoose.model("User", userSchema, "users");
export default User;
