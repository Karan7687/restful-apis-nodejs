const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Get Request in places-Routes");
  res.json({ message: "Working Great !" });
});

module.exports = router;
