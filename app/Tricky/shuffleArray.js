// How to shuffle an Array

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
console.log(shuffleArray([1, 2, 4, 566, 7, 8, 43]));

// Get unique elements from an array using Set

const uniqueElements = (arr) => [...new Set(arr)];
console.log(
  uniqueElements([1, 2, 4, 5, 6, 7, 8, 43, 2, 4, 2, 23, 54, 2, 5, 1, 1, 1])
);
