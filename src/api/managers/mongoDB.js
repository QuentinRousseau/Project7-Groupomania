import mongoose from "mongoose";
import { MONGODB_URL } from "./env";
if (!MONGODB_URL) throw new Error("MONGODB_URL must be set in .env");

const statusDB = mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

export default statusDB;
