// Validator: A node module for a library of string validators and sanitizers.

const validator = require("validator");

// Check whether given email is valid or not
let email = "test@gmail.com";
console.log(validator.isEmail(email)); //true

email = "test@";
console.log(validator.isEmail(email)); // false

// Check whether string is in lowercase or not
let name = "github";
console.log(validator.isLowercase(name)); //true

name = "GITHUB";
console.log(validator.isLowercase(name)); //false

// Check whether string is empty or not
let str = "";
console.log(validator.isEmpty(str)); //true

str = "github";
console.log(validator.isEmpty(str)); //false

// Other functions also available in
// this module like isBoolean()
// isCurrency(), isDecimal(), isJSON(),
// isJWT(), isFloat(), isCreditCard(), etc.
