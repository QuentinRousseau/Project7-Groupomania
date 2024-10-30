import jwt from "jsonwebtoken"; // génère les token pour augmenter la sécurité
import env from "./env.js";

const JWT_SECRET = env.JWT_SECRET;
const JWT_EXPIRE = env.JWT_EXPIRE;

if (!JWT_SECRET) throw new Error(" JWT_SECRET must be set in .env");
if (!JWT_EXPIRE) throw new Error(" JWT_EXPIRE must be set in .env");

const verify = (token) => jwt.verify(token, JWT_SECRET);

const sign = (data) =>
  jwt.sign(data, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
  });

export default { verify, sign };
