import statusDB from "../managers/mongoDB";

export default (req, res, next) => {
  statusDB.then(() => next()).catch(() => next(new Error("DB not found"))),
    res.set("Cross-Origin-Resource-Policy", "cross-origin");
};
