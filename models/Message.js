const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Message", MessageSchema);
