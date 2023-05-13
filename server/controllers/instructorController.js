const { User } = require("../models/user");

const makeInstructor = async (req, res) => {
  // console.log("REQ.USER", req.user);
  // console.log("REQ HEADER", req.header);
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { role: ["Instructor", "Subscriber"] },
    { new: true }
  );

  // const user = await User.findById(req.user._id).exec();
  console.log("USER", user);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  //  Update the user's role to "Instructor"
  // user.role = "Instructor";
  // await user.save();

  res.json(user);
};

module.exports = { makeInstructor };
