import "./src/api/managers/mongoDB.js";
import Account from "./src/api/models/Account.js";
import User from "./src/api/models/User.js";
import Post from "./src/api/models/Post.js";

const datas = {
  accounts: await Account.find(),
  users: await User.find(),
  posts: await Post.find(),
};

// console.log(JSON.stringify(datas, null, 2)); affiche les datas pour le debug
process.exit();
