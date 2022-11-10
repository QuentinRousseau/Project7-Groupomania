import "./src/api/managers/mongoDB.js";
import Account from "./src/api/models/Account.js";
import User from "./src/api/models/User.js";
import Post from "./src/api/models/Post.js";
import fs from "fs";

const datas = {
  accounts: await Account.find({}, {}, { autopopulate: false }),
  users: await User.find({}, {}, { autopopulate: false }).select(`+account`),
  posts: await Post.find({}, {}, { autopopulate: false }),
};
fs.writeFileSync("db-export.json", JSON.stringify(datas, null, 2));

process.exit();
