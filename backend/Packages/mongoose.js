// Mongoose: It is a MongoDB ODM (object data modeling) tool designed to work in an asynchronous environment. this package enables you to easily connect to a MongoDB database using Node.js.

const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect("mongodb://localhost:27017/playground", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Connected Successfully"))
    .catch(() => console.error("Not Connected"));
};

module.exports = connectDB;
