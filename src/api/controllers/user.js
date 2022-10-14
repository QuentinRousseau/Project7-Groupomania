import bcrypt from "bcrypt";
import jwt from "../managers/jwt";
import User from "../models/User";
import Account from "../models/Account";
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//SignUp function

export async function signup(req, res, next) {
  const { name, email, password } = req.body; // retrieve data's request
  console.log("requete entrante :", req.body, email, req.body.name);
  if (!emailRegex.test(email))
    // email check
    return res.status(401).json({ error: "Invalid email !" });
  if (password.length > 128)
    //password check
    return res.status(401).json({ error: "Password to long !" });
  const hash = await bcrypt.hash(password, 10); // await hash of password
  let user = new User({
    // Creating new User with the name
    name,
  });
  console.log("user créé", user);
  console.log("controle des données avant création d'account", email, password);
  let account = new Account({
    //after creating user, create Account with email & password hash
    email,
    password: hash,
  });
  console.log("account créé", account);
  await user.save();
  await account.save(); //  saving of Objects
  console.log("utilisateur et compte sauvegardés :", user, account);
  user.account = account._id; // Edit id beetwin them
  account.user = user._id;

  console.log("user", user, "account", account);

  user = await user.save();
  account = await account.save(); // Saving Objects after modifications
  res.status(201).json({
    user,
    account,
    token: jwt.sign({ accountId: account._id, userId: user._id }),
    message: "User created !",
  });
}

//  Login function
export async function login(req, res, next) {
  const account = await Account.findOne({ email: req.body.email });
  if (!account) return res.status(401).json({ error: "Invalid credentials !" });
  const valid = await bcrypt.compare(req.body.password, account.password);

  if (!valid) return res.status(401).json({ error: "Invalid credentials !" });
  console.log(account.user._id);
  res.status(200).json({
    user: account.user,
    token: jwt.sign({ accountId: account._id, userId: account.user._id }), //config de jwt dans jwt.js
  });
}
