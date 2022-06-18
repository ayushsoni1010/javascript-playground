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
