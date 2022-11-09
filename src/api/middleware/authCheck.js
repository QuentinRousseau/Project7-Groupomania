export default (req, res, next) => {
  if ((req.auth.admin = false && req.body.author._id != req.auth.userId))
    return res.status(401).json({ error: "Not authorized" });
  else next();
};
