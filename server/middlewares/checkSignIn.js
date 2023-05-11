const User = require("../models/user");

const requireSignIn = (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    return res.status(401).json({ message: "Please, Sign In First!" });
  }

  next();
};

module.exports = { requireSignIn };
