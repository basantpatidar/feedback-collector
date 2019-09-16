//custom middleware to check login and check credits
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return req.status(403).send({ error: "Not enough credits!" });
  }

  //use next in every middleware to call next middleware in chain
  next();
};
