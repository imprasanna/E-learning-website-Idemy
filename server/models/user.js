const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 20,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
    picture: {
      type: String,
      default: "/avatar.png",
    },
    role: [
      {
        type: String,
        default: ["Subscriber"],
        enum: ["Subscriber", "Instructor", "Admin"],
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("IdemyUsersInfo", userSchema);

module.exports = { User };
