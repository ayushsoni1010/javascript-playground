// Morgan: HTTP request logger middleware for node.js. Including the preset tiny as an argument to morgan() will use its built-in method, identify the URL, declare a status, and the request’s response time in milliseconds.

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
