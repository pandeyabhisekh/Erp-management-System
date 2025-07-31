const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true, // Prevent duplicates
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true } // <-- fixed typo
);

const Users = mongoose.model("users", userSchema);

module.exports = Users;
