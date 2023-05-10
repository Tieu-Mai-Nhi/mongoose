const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Nodemy");

const Schema = mongoose.Schema;

const account = new Schema(
  {
    username: String,
    password: Number,
    age: Number,
  },
  { collection: "Account" }
  //   chọn đúng collection, ko auto thêm s
);

const AccountModel = mongoose.model("account", account);

// AccountModel.find({ username: "okok" })
//   .then(function (data) {
//     console.log("data: ", data);
//   })
//   .catch(function (e) {
//     console.log("error: ", e);
//   });

// AccountModel.create({
//   username: "hung",
//   password: 88888,
// })
//   .then(function (data) {
//     console.log("data: ", data);
//   })
//   .catch(function (e) {
//     console.log("error: ", e);
//   });

AccountModel.updateOne(
  // ĐIỀU KIỆN
  {
    username: "hung",
  },
  //CÁI CẦN SỬA Ở DATA MỚI
  {
    password: 123456,
  }
)
  .then((data) => console.log("data: ", data))
  .catch((e) => console.log("error: ", e));

AccountModel.deleteMany(
  // ĐIỀU KIỆN
  {
    username: "thang",
  }
)
  .then((data) => console.log("data: ", data))
  .catch((e) => console.log("error: ", e));
