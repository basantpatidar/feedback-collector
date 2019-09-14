//custom middleware to check login
module.exports = (req, res, next) => {
  if (!req.user) {
    return req.status(401)({ error: "You must login!" });
  }
  //use next in every middleware to call next middleware in chain
  next();
};
