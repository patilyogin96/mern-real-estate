const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    //   avatar: {
    //     type: String,
    //     default:
    //       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    //   },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// export default User;
module.exports = User;
