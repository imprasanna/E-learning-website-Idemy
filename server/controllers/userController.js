const Joi = require("joi");
const { User } = require("../models/user");
const genAuthToken = require("../utils/genAuthToken");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const createUser = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().required().email(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(6)
      .max(100)
      .required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).send("User already exists!!!");
  }

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = bcrypt.genSalt(saltRounds);

  user.password = await bcrypt.hash(user.password, +salt);

  await user.save();

  const token = genAuthToken(user);

  res.send(token);
};

module.exports = { createUser };
