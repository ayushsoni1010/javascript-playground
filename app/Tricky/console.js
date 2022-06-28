console.log("Ayush");
// 1. Apply CSS to Console Using %c
console.log(`%c Hey👋! Good Morning Developers`, "color:blue");

// 2. Bind console.log() in one line
const c = console.log.bind(console);
c("Hey");

// console methods
console.table();
console.trace();
console.log();
console.error();
console.warn();
console.assert();
console.count();
console.countReset();
console.time();
console.timeEnd();
console.timeLog();
console.clear();