import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";
import softDelete from "mongoose-delete";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    avatar: { type: String, default: "/images/default-avatar.png" },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      autopopulate: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

userSchema.plugin(uniqueValidator);

mongoose.plugin(mongooseAutoPopulate);
mongoose.plugin(softDelete, { deletedAt: true, overrideMethods: true });

const User =
  mongoose.models.User || mongoose.model("User", userSchema, "users");
export default User;
