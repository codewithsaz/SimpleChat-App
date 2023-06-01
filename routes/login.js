const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/user", (req, res, next) => {
  res.send(
    '<h1>This is Login Screen</h1><form action="/login/user" method="POST"><input type="text" id="userName" name="title" placeholder="Username" oninput="myInput()"><button type="submit">Submit</button></form><script>function myInput(){localStorage.setItem("username", document.getElementById("userName").value)}</script>'
  );
});
router.post("/user", (req, res) => {
  console.log(req.body.title);
  res.redirect("/chat/user");
});

module.exports = router;
