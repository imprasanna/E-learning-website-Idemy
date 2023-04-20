const { User } = require("../models/user");

const makeInstructor = async (req, res) => {
  const user = await User.findById(req.user._id).exec();

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  //   Update the user's role to "Instructor"
  user.role = "Instructor";
  await user.save();

  res.json(user);
};

module.exports = { makeInstructor };
