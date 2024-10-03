const mongoose = require("mongoose");

const ParcelSchema = mongoose.Schema(
  {
    from: { type: String, require: true },
    to: { type: String, require: true },
    sendername: { type: String, require: true },
    recipentname: { type: String, require: true },
    senderemail: { type: String, require: true },
    recipentemail: { type: String, require: true },
    weight: { type: String, require: true },
    cost: { type: String, require: true },
    date: { type: String, require: true },
    note: { type: String },
    feedback: { type: String },
    status: { type: String, default: 0 },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", ParcelSchema);
