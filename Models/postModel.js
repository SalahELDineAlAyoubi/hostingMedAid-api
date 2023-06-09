const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    dosage: { type: String, required: true },
    quantity: { type: String, required: true },
    opendate: { type: String, required: true },
    expirydate: { type: String, required: true },
    image: { type: String, required: true },
    location: String,
    phone: String,
    saved: {
      type: Boolean,
      default: true,
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
    taken: {
      type: Number,
      default: 0,
    },
    userIdBook: String,
    note: String,
    takenUntil: Date,
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Posts", postSchema);
