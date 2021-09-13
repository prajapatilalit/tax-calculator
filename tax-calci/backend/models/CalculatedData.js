const mongoose = require("mongoose");

const TaxDataSchema = mongoose.Schema({
  basic: {
    type: Number,
  },
  lta: {
    type: Number,
  },
  hra: {
    type: Number,
  },
  fa: {
    type: Number,
  },
  investment: {
    type: Number,
  },
  rent: {
    type: Number,
  },
  cityType: {
    type: String,
  },
  mediclaim: {
    type: Number,
  },
  appHRA: {
    type: Number,
  },
  taxInc: {
    type: Number,
  },
});

module.exports = TaxData = mongoose.model("taxData", TaxDataSchema);
