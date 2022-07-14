const express = require("express");
const cors = require("cors");

const app = express();

// Simple Usage (Enable all CORS requests)
app.use(cors());

// Enable CORS for a single route
app.get("/product/:id", cors(), (req, res) => {
  res.json({ msg: "This is CORS-enabled for a single value" });
});
