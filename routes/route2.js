const path = require("path");
const express = require("express");

const router = express.Router();

router.post("/second", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });

router.get("/second", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "second.html"));
});



module.exports = router;
