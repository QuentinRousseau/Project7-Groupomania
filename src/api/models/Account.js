import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import MongooseDelete from "mongoose-delete";

const accountSchema = mongoose.Schema(
  {
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: { createdAt: "created_at" } }
);

accountSchema.plugin(uniqueValidator);
mongoose.plugin(softDelete, { deletedAt: true, overrideMethods: true });

const Account =
  mongoose.models.Account ||
  mongoose.model("Account", accountSchema, "account");

export default Account;
