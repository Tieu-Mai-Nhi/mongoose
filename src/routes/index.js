const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});
router.get("/student", (req, res) => {
  res.send("Student");
});
router.post("/", (req, res) => {
  console.log(req.header, req.body);
  res.json("score POST");
});
router.get("/:id", (req, res) => {
  res.json("student" + req.params.id);
});

module.exports = router;
