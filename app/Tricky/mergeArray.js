// Merging an Array

// Merge but don't remove the duplicates
const merge1 = (a, b) => a.concat(b);
// Or
const merge2 = (a, b) => [...a, ...b];
// Merge and remove the duplicates
const merge3 = [...new Set(a.concat(b))];
// Or
const merge4 = [...new Set([...a, ...b])];
