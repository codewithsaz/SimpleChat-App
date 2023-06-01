const express = require("express");
const router = express.Router();

const fs = require("fs");

router.get("/user", (req, res, next) => {
  fs.readFile("message.txt", "utf8", (err, data) => {
    if (data == undefined) {
      data = "No Chat exists";
    }
    console.log(data);
    const html = `<html><head><title>Enter Message</title></head><body><pre style="color:blue;">${data}</pre><h2>Enter next message here</h2> <form action="/chat/user" method="POST"><input type="hidden" id="userName" name="Username" h><input type="text" name="message"><button type="submit">SEND</button></form><script>document.getElementById("userName").value=localStorage.getItem("username")</script></body></html>`;
    res.send(html);
  });
});

router.post("/user", (req, res) => {
  console.log(req.body);
  const msg = req.body.Username + ": " + req.body.message + "\r\n";
  fs.appendFileSync("message.txt", msg);
  res.redirect("/chat/user");
});

module.exports = router;
