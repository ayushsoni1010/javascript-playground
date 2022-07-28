// Check if the code is running in Node.js

const isNode =
  typeof process !== "undefined" &&
  process.version !== null &&
  process.versions.node !== null;

console.log(isNode);
