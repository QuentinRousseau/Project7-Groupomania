import bcrypt from "bcrypt";
import jwt from "../managers/jwt";
import User from "../models/User";
import Account from "../models/Account";
import handleError from "mongoose";
import mongoose from "mongoose";
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//fonction signup de base
// export async function signup(req, res, next) {
//   const { username, email, password } = req.body;
//   console.log(req.body, email, req.body.name);
//   if (!emailRegex.test(email))
//     return res.status(401).json({ error: "Invalid email !" });
//   if (password.length > 128)
//     return res.status(401).json({ error: "Password to long !" });
//   const hash = await bcrypt.hash(req.body.password, 10); // attente de la réponse du hashage du mdp
//   const user = new User({
//     username: req.body.name,
//     email: req.body.email,
//     password: hash,
//   }); // creation de l'utilisateur en attribuant le mdp hash a la place de l'initial
//   await user
//     .save() // attente de la réponse de la sauvegarde de celui ci
//     .catch((error) => {
//       throw res.status(400).json({ error });
//     }); // catch l'erreur et renvoie un code 400 plus un message specifiant le problème

//   res.status(201).json({
//     username: user.username,
//     userId: user._id,
//     token: jwt.sign({ userId: user._id }),
//     message: "User created !",
//   }); // sinon renvoie d'un code 201 et d'un message pour specifier la creation de l'utilisateur
// }

//Fonction signUp avec account et user

export async function signup(req, res, next) {
  const { name, email, password } = req.body;
  console.log(req.body, email, req.body.name);
  if (!emailRegex.test(email))
    return res.status(401).json({ error: "Invalid email !" });
  if (password.length > 128)
    return res.status(401).json({ error: "Password to long !" });
  const hash = await bcrypt.hash(password, 10); // attente de la réponse du hashage du mdp
  let user = new User({
    name,
  });
  console.log(user);
  let account = new Account({
    email,
    password: hash,
  });
  console.log(account);
  user = await user.save();
  account = await account.save();

  user.account = account._id;
  account.user = user._id;

  res.status(201).json({
    user: await user.save(),
    account: await account.save(),
    token: jwt.sign({ userId: user._id }),
    message: "User created !",
  }); // sinon renvoie d'un code 201 et d'un message pour specifier la creation de l'utilisateur
}

export async function login(req, res, next) {
  const account = await Account.findOne({ email: req.body.email }).populate(
    "User"
  );
  if (!account) return res.status(401).json({ error: "Invalid credentials !" });
  const valid = await bcrypt.compare(req.body.password, account.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials !" });

  res.status(200).json({
    userId: account._id,
    token: jwt.sign({ userId: account._id }), //config de jwt dans jwt.js
  });
}
