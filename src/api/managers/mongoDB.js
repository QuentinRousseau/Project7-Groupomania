import mongoose from "mongoose";
import envlocal from "./env";
const mongoDBUrl = envlocal;
console.log(mongoDBUrl);
if (!mongoDBUrl) throw new Error("mongoDBUrl must be set in .env");

const statusDB = mongoose
  .connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

export default statusDB;
