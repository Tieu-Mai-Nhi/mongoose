const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Nodemy");

const Schema = mongoose.Schema;

const account = new Schema({
  username: String,
  password: Number,
  age: Number,
});

const AccountModel = mongoose.model("account", account);

AccountModel.find({ username: "okok" })
  .then(function (data) {
    console.log("data: ", data);
  })
  .catch(function (e) {
    console.log("error: ", e);
  });

AccountModel.create({
  username: "hung",
  password: 88888,
})
  .then(function (data) {
    console.log("data: ", data);
  })
  .catch(function (e) {
    console.log("error: ", e);
  });
