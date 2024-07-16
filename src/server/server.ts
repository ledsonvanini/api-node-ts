import express from "express";
const server = express();

// Creating Routes
server.get("/", (req, res) => {
  res.send("Hello Express...");
});

export { server };
