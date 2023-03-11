const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    profilePicture: String,
    location: String,
    //medecines: [],
  },
  { timestamps: true }
);

module.exports= mongoose.model("Users", UserSchema)

