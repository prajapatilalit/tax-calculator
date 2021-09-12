const express = require("express");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

//Database connection
connectDB();

app.get("/", (req, res) => {
  res.send("Hello the server Successfully synchronised");
});

app.listen(port, () => {
  console.log(`server running at port: ${port}`);
});
