var express = require("express");
var router = express.Router();
const path = require("path");

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/success", function (req, res, next) {

  res.sendFile(path.join(__dirname, "../public", "success.html"));
});

router.get("/cancel", function (req, res, next) {

  res.sendFile(path.join(__dirname, "../public", "cancel.html"));
});

router.get("/notify", function (req, res, next) {

  res.sendFile(path.join(__dirname, "../public", "notify.html"));
});

module.exports = router;
