import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import softDelete from "mongoose-delete";
import mongooseAutoPopulate from "mongoose-autopopulate";

const accountSchema = mongoose.Schema(
  {
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
  },
  { timestamps: true }
);

accountSchema.plugin(uniqueValidator);
mongoose.plugin(mongooseAutoPopulate);
mongoose.plugin(softDelete, { deletedAt: true, overrideMethods: true });

const Account =
  mongoose.models.Account ||
  mongoose.model("Account", accountSchema, "account");

export default Account;
