const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Nodemy");

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    username: String,
    password: String,
    age: Number,
    salary: Number,
    course: {
      type: String,
      ref: "course",
    },
    thenganhang: {
      type: String,
      ref: "cardModel",
    },
  },
  { collection: "Account" }
  //   chọn đúng collection, ko auto thêm s
);

const courseSchema = new Schema(
  {
    name: String,
    teacher: String,
    lesson: [],
    salary: {},
  },
  { collection: "course" }
  //   chọn đúng collection, ko auto thêm s
);

const cardSchema = new Schema(
  {
    seri: String,
    bank: String,
  },
  { collection: "card" }
  //   chọn đúng collection, ko auto thêm s
);

const AccountModel = mongoose.model("account", accountSchema);
const CourseModel = mongoose.model("course", courseSchema);
const CardModel = mongoose.model("cardModel", cardSchema);

// CardModel.create({
//   seri: "12326",
//   bank: "TP bank",
// });
// CourseModel.create({
//   name: "toan",
//   teacher: "huy",
//   lesson: [12, 2],
//   salary: { thang12: 555 },
// });
AccountModel.find({ username: "student1" })
  .populate({
    path: "course",
    populate: { path: "teacher" },
  })
  .populate("course")
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
