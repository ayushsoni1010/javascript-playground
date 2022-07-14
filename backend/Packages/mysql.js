const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  database: "dbname",
  user: "username",
  password: "password",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as Id: " + connection.threadId);
});

connection.query("SELECT * FROM employee", (error, results, fields) => {
  if (error) {
    throw error;
  }
  results.forEach((element) => {
    console.log(element);
  });
});

connection.end();
