import "./src/api/managers/mongoDB.js";
import Account from "./src/api/models/Account.js";
import User from "./src/api/models/User.js";
import Post from "./src/api/models/Post.js";
import fs from "fs";

async function main() {
  const datas = JSON.parse(fs.readFileSync("db_export.json"));
  for (const [name, modelDatas] of Object.entries(datas)) {
    const Model = name;

    for (const data of modelDatas) {
      await Model.replaceOne({ _id: data.id }, data, { upsert: true });
      console.log("updated entry");
    }
  }
  process.exit();
}
main();
