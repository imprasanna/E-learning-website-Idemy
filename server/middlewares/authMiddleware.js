const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
  const bearerToken = req.headers["authentication"];
  const token = bearerToken?.replace("Bearer", "").trim();
  if (!token) {
    return res
      .status(401)
      .send({ status: false, message: "No token provided." });
  }

  jwt.verify(token, "Ilovemycountry", function (err, decoded) {
    console.log(decoded);
    req.user = decoded;
    if (err)
      return res.status(401).send({ status: false, message: "Invalid token" });
    //     if (decoded.userType === "admin") {
    //       next();
    //     }
    //     return res
    //       .status(401)
    //       .send({ status: false, message: "Unauthorized user" });
    next();
  });
};

module.exports = {
  adminMiddleware,
};
