const bcrypt = require("bcrypt");

const encryptPassword = (password) => {
  const salt = bcrypt.genSalt(10);

  password = bcrypt.hash(password, salt);

  return password;
};

const comparePassword = (password, hashedPassword) => {
  const passwordValidity = bcrypt.compare(password, hashedPassword);

  return passwordValidity;
};

module.exports = { encryptPassword, comparePassword };
