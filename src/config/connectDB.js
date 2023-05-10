const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Nodemy");

const Schema = mongoose.Schema;

const account = new Schema(
  {
    username: String,
    password: String,
    age: Number,
    salary: Number,
  },
  { collection: "Account" }
  //   chọn đúng collection, ko auto thêm s
);

const AccountModel = mongoose.model("account", account);

const course = new Schema(
  {
    username: String,
    password: String,
    age: Number,
    salary: Number,
  },
  { collection: "course" }
  //   chọn đúng collection, ko auto thêm s
);

const CourseModel = mongoose.model("course", course);

// AccountModel.create(
//   {
//     username: "student1",
//     password: "123564",
//     age: 19,
//     salary: 2000,
//   },
//   {
//     username: "student2",
//     password: "xxxx",
//     age: 19,
//     salary: 2500,
//   },
//   {
//     username: "student3",
//     password: 123454,
//     age: 19,
//     salary: 2045600,
//   },
//   {
//     username: "student4",
//     password: 12564,
//     age: 1789,
//     salary: 278000,
//   },
//   {
//     username: "student5",
//     password: 451423,
//     age: 7819,
//     salary: 205400,
//   }
// );
