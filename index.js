import express from "express";
import fs from "fs";
const app = express();
app.use(express.json());

var messages = [];

app.get("/chat_app", (req, res) => {
  fs.readFile("chat.html", "utf-8", (err, text) => {
    res.send(text);
  });
});

app.get("/chat_app/get_messages", (req, res) => {
  res.json(messages);
});

app.post("/chat_app/send_new_message", (req, res) => {
  messages.push(req.body);
  res.status(200);
});

app.listen(5000);
