require("dotenv").config();
const express = require("express");
const cors = require("cors");

const server = express();
const port = process.env.PORT || 9000;

server.use(express.json());
server.use(cors());

server.get("/api/whatsup", (req, res) => {
  res.json({ message: "Go away" });
});

server.use("*", (req, res) => {
  res.send(`<h1>Why are you here?</h1>`);
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
