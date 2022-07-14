// A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

const moment = require("moment");

let now = "04/08/2020 15:00:00";
let then = "10/02/2021 15:00:00";

let ms = moment(now, "DD/MM/YYYY HH:mm:ss").diff(then, "DD/MM/YYYY HH:mm:ss");

