console.log("Ayush");
// 1. Apply CSS to Console Using %c
console.log(`%c Hey👋! Good Morning Developers`, "color:blue");

// 2. Bind console.log() in one line
const c = console.log.bind(console);
c("Hey");

// 3. Nullish coalescing operator (??)
function calculatePrice(price, quantity) {
  const total = (price ?? 2) * (quantity ?? 1);
  return console.log(`${quantity} items cost you ${total} bucks`);
}

calculatePrice(undefined, " ");

// 4. Detect the height of the app by using JS
console.log(window.innerHeight);

// String Methods:

// charAt()
// Returns a string representing the character at the given index.
const str = "Hello World";
str.charAt(0); // "H"

// codePointAt()
// Returns a number representing the UTF-16 code unit value of the character at the given index.
const str0 = "Hello World";
str.charCodeAt(0); // 72

// charCodeAt()
// Returns a number representing the UTF-16 code unit value of the character at the given index.
const str1 = "Hello World";
str.charCodeAt(0); // 72

// concat()
// Returns a new string containing the concatenation of the given strings.
const str3 = "Hello";
const str2 = " World";
str.concat(str2); // "Hello World"
console.log(`${str}${str2}`); // "Hello World"
console.log(str + str2); // "Hello World"

// endsWith()
// Returns true if the string ends with the given string, otherwise false.
const str4 = "Hello World";
str.endsWith("World"); // true

// includes()
// Returns true if the string contains the given string, otherwise false.
const str5 = "Hello World";
str.includes("World"); // true

// indexOf()
// Returns the index within the string of the first occurrence of the specified value, or -1 if not found.
const str6 = "Hello World";
str.indexOf("World"); // 6

// lastIndexOf()
// Returns the index within the string of the last occurrence of the specified value, or -1 if not found.
const str7 = "Hello World";
str.lastIndexOf("World"); // 6

// match()
// Returns a list of matches of a regular expression against a string.
const str8 = "Hello World";
str.match(/[A-Z]/); // ["H"]

// matchAll()
// Returns a list of matches of a regular expression against a string.
const str9 = "Hello World";
str.matchAll(/[A-Z]/g); // ["H", "W"]
// OR
str.match(/[A-Z]/g); // ["H", "W"]


// padEnd()
// Returns a new string with some content padded to the end of the string.
const str10 = "Hello";
str.padEnd(15, "World"); // "HelloWorldWorld"

// padStart()
// Returns a new string with some content padded to the start of the string.
const str11 = "Hello";
str.padStart(15, "World"); // "WorldWorldWorldHello"

// repeat()
// Returns a new string that contains the specified number of copies of the string.
const str12 = "Hello";
str.repeat(3); // "HelloHelloHello"

// replace()
// Returns a new string with some or all matches of a regular expression replaced by a replacement string.
const str13 = "Hello World";
str.replace("l", "*"); // "He*lo World"

// replaceAll()
// Returns a new string with some or all matches of a regular expression replaced by a replacement string.
const str14 = "Hello World";
str.replaceAll("l", "*"); // "He**o Wor*d"
OR;
str.replace(/l/g, "*"); // "He**o Wor*d"

// trim()
// Returns a new string with the leading and trailing whitespace removed.

const str15 = "  Hello World  ";
str.trim(); // "Hello World"

// trimStart()
// Returns a new string with the leading whitespace removed.
const str16 = "  Hello World  ";
str.trimStart(); // "Hello World  "

// trimEnd()
// Returns a new string with the trailing whitespace removed.
const str17 = "  Hello World  ";
str.trimEnd(); // "  Hello World"


// toString()
// Returns the string representation of the specified object.

const str18 = new String("Hello World");
console.log(str); // Object of String
str.toString(); // "Hello World"


// toLowerCase()
// Returns a new string with all the uppercase characters converted to lowercase.
const str19 = "Hello World";
str.toLowerCase(); // "hello world"


// toUpperCase()
// Returns a new string with all the lowercase characters converted to uppercase.
const str20 = "Hello World";
str.toUpperCase(); // "HELLO WORLD"


// search()
// Returns the index within the string of the first occurrence of the specified value, or -1 if not found.
const str21 = "Hello World 1";
const regex = /[^\D\s]/g; // Find digit
str.search(regex); // 12

// slice()
// Returns a new string containing the characters of the string from the given index to the end of the string.
const str22 = "Hello World";
str.slice(6); // "World"

// split()
// Returns an array of strings split at the given index.
const str23 = "Hello World";
str.split(" "); // ["Hello", "World"]

// startsWith()
// Returns true if the string starts with the given string, otherwise false.
const str24 = "Hello World";
str.startsWith("Hello"); // true


// substring()
// Returns a new string containing the characters of the string from the given index to the end of the string.

const str25 = "Ayush Soni";
str.substring(0, 3);
// ("Ayu");
// NOTE: substring takes parameters as (from, to).


// substr()
// Returns a new string containing the characters of the string from the given index to the end of the string.
const str26 = "Hello World";
str.substr(1, 2); // "el"
// NOTE: substr takes parameters as (from, length).

