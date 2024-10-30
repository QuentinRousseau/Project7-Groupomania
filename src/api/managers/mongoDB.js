import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
const mongoDBUrl = process.env.MONGODB_URL;

if (!mongoDBUrl) throw new Error("mongoDBUrl must be set in .env");

mongoose.plugin(autopopulate);
const statusDB = mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

statusDB;
if (!statusDB) {
  throw new Error("Connexion à MongoDB échouée !");
} else {
  console.log("Connexion à MongoDB réussie !");
}

export default statusDB;
