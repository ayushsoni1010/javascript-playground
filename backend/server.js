console.log("ayush");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is home page");
});
console.log("soni")

app.post("/", (req, res) => {
  res.send("This is home page with post request");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});