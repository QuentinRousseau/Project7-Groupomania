import mongoose from "mongoose";
import envlocal from "./env";
import autopopulate from "mongoose-autopopulate";
const mongoDBUrl = envlocal.MONGODB_URL;
console.log(mongoDBUrl);
if (!mongoDBUrl) throw new Error("mongoDBUrl must be set in .env");

mongoose.plugin(autopopulate);
const statusDB = mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
await statusDB;
if (!statusDB) {
  throw new Error("Connexion à MongoDB échouée !");
} else {
  console.log("Connexion à MongoDB réussie !");
}

export default statusDB;
