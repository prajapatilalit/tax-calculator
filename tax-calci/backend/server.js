const express = require("express");
const connectDB = require("./config/db");

const app = express();
//Database connection
connectDB();

app.use(express.json({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello the server Successfully synchronised");
});

//Define route

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/calculate", require("./routes/api/calculatedData"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running at port: ${port}`);
});
