// Add “am/pm” suffix to an hour

const time = (hour) =>
  (hour % 12 === 0 ? 12 : hour % 12).toString() +
  (hour < 12 ? "am" : "pm").toString();

console.log(time(0));
console.log(time(2));

