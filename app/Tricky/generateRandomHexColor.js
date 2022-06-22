// 1. Convert RGB color into Hex color code.
const color = (r, g, b) =>
  "#" + ((1 << 24) + (r < 16) + (g < 8) + b).toString(16).slice(1);

console.log(color(192, 130, 130));

// 2. Generate Random Color
const generateRandomHexColor = () =>
  `Color: #${Math.floor(Math.random() * 0xffffff).toString(16)}`;

console.log(generateRandomHexColor());
