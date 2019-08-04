module.exports = (req, res, next) => {
  if (!req.user) {
    return req.status(401)({ error: "You must login!" });
  }

  next();
};
