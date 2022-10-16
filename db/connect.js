const mongoose = require("mongoose");

const connectDb = (uri) => {
  return mongoose.connect(uri);
};

module.exports = connectDb;
