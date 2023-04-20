const User = require("../models/user");

const requireSignIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  next();
};

module.exports = { requireSignIn };
