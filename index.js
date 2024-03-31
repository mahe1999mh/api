const express = require("express");
const chats = require("./data/data");
const cors = require('cors');
const connectDB = require("./config/db");



require("dotenv").config();

connectDB()
const app = express();
app.use(express.json());
app.use(cors());


const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});


app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id == req.params.id);
  res.send(singleChat);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
