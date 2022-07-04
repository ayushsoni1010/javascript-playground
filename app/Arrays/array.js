// 1. Array.map()
Array.map();
// Returns a new array with the results of calling a provided function on every element in this array.

// Code
const list1 = [1, 2, 3, 4];
list1.map((ele) => ele * 2); // [2, 4, 6, 8]

/******************************************************************************************************/

// 2. Array.filter()
Array.filter();
// Returns a new array with all elements that pass the test implemented by the provided function.

// Code
const list2 = [1, 2, 3, 4];
list2.filter((ele) => ele % 2 === 0); // [2, 4]

/******************************************************************************************************/

// 3. Array.reduce()
Array.reduce();
// Reduce the array to a single value. The value returned by the function is stored in an accumulator (result/total).

// Code
const list3 = [1, 2, 3, 4, 5];
list3.reduce((total, item) => total + item, 0); // 15

/******************************************************************************************************/

// 4. Array.reduceRight()
Array.reduceRight();
// Executes a reducer function (that you provide) on each element of the array resulting in a single output value(from right to left).

// Code
const list4 = [1, 2, 3, 4, 5];
list4.reduceRight((total, item) => total + item, 0); // 15

/******************************************************************************************************/

// 5. Array.fill()
Array.fill();
// Fill the elements in an array with a static value.

// Code
const list5 = [1, 2, 3, 4, 5];
list5.fill(0); // [0, 0, 0, 0, 0]

/******************************************************************************************************/

// 6. Array.find()
Array.find();
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

// Code
const list6 = [1, 2, 3, 4, 5];
list6.find((el) => el === 3); // 3
list6.find((el) => el === 6); // undefined

/******************************************************************************************************/

// 7. Array.indexOf()
Array.indexOf();
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// Code
const list7 = [1, 2, 3, 4, 5];
list7.indexOf(3); // 2
list7.indexOf(6); // -1

/******************************************************************************************************/

// 8. Array.lastIndexOf()
Array.lastIndexOf();
// Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backward, starting at fromIndex.

// Code
const lis8 = [1, 2, 3, 4, 5];
lis8.lastIndexOf(3); // 2
lis8.lastIndexOf(3, 1); // -1

/******************************************************************************************************/

// 9. Array.findIndex()
Array.findIndex();
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.

// Code
const list9 = [5, 12, 8, 130, 44];
list9.findIndex((element) => element > 13); // 3

/******************************************************************************************************/

// 10. Array.includes()
Array.includes();
// Returns true if the given element is present in the array.

// Code
const lis10 = [1, 2, 3, 4, 5];
lis10.includes(3); // true
lis10.includes(6); // false

/******************************************************************************************************/

// 11. Array.pop()
Array.pop();
// Removes the last element from an array and returns that element.

// Code
const list11 = [1, 2, 3, 4, 5];
list11.pop(); // 5
list11; // [1, 2, 3, 4]

/******************************************************************************************************/

// 12. Array.push()
Array.push();
// Appends new elements to the end of an array, and returns the new length.

// Code
const list12 = [1, 2, 3, 4, 5];
list12.push(6); // 6
list12; // [1, 2, 3, 4, 5, 6]

/******************************************************************************************************/

// 13. Array.shift()
Array.shift();
// Removes the first element from an array and returns that element.

// Code
const list13 = [1, 2, 3, 4, 5];
list13.shift(); // 1
list13; // [2, 3, 4, 5]

/******************************************************************************************************/

// 14. Array.unshift()
Array.unshift();
// Adds new elements to the beginning of an array, and returns the new length.

// Code
const list14 = [1, 2, 3, 4, 5];
list14.unshift(0); // 6
list14; // [0, 1, 2, 3, 4, 5]

/******************************************************************************************************/

// 15. Array.splice()
Array.splice();
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Code
const list15 = [1, 2, 3, 4, 5];
list15.splice(1, 2); // [2, 3]
list15; // [1, 4, 5]

/******************************************************************************************************/

// 16. Array.slice()
Array.slice();
// Returns a shallow copy of a portion of an array into a new array object selected from beginning to end (end not included). The original array will not be modified.

// Code
const list16 = [1, 2, 3, 4, 5];
list16.slice(1, 3); // [2, 3]
list16; // [1, 2, 3, 4, 5]

/******************************************************************************************************/

// 17. Array.join()
Array.join();
// Joins all elements of an array into a string.

// Code
const list17 = [1, 2, 3, 4, 5];
list17.join(", "); // "1, 2, 3, 4, 5"

/******************************************************************************************************/

// 18. Array.reverse()
Array.reverse();
// Reverses the order of the elements in an array.

// Code
const list18 = [1, 2, 3, 4, 5];
list18.reverse(); // [5, 4, 3, 2, 1]
list18; // [5, 4, 3, 2, 1]

/******************************************************************************************************/

// 19. Array.sort()
Array.sort();
// Sorts the elements of an array in place and returns the array. The default sort order is according to string Unicode code points.

// Code
const list19 = [4, 1, 3, 2, 10];
list19.sort(); // 😧 [1, 10, 2, 3, 4]
list19.sort((a, b) => a - b); // 😀 [1, 2, 3, 4, 10]

/******************************************************************************************************/

// 20. Array.some()
Array.some();
// Returns true if at least one element in the array passes the test implemented by the provided function.

// Code
const list20 = [1, 2, 3, 4, 5];
list20.some((el) => el === 3); // true
list20.some((el) => el === 6); // false

/******************************************************************************************************/

// 21. Array.every()
Array.every();
// Returns true if all elements in the array pass the test implemented by the provided function.

// Code
const list21First = [1, 2, 3, 4, 5];
list21First.every((el) => el === 3); // false

const list21Second = [2, 4, 6, 8, 10];
list21Second.every((el) => el % 2 === 0); // true

/******************************************************************************************************/

// 22. Array.from()
Array.from();
// Creates a new array from an array-like or iterable object.

// Code
const list22String = "Ayush";
Array.from(list22String); // ['A', 'y', 'u', 's', 'h']

const range = (n) => Array.from({ length: n }, (_, i) => i + 1);
console.log(range(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/******************************************************************************************************/

// 23. Array.of()
Array.of();
// Creates a new array with a variable number of arguments, regardless of the number or type of the arguments.

// Code
const list23 = Array.of(1, 2, 3, 4, 5);
list23; // [1, 2, 3, 4, 5]

/******************************************************************************************************/

// 24. Array.isArray()
Array.isArray();
// Returns true if the given value is an array.

// Code
Array.isArray([1, 2, 3, 4, 5]); // true
Array.isArray(5); // false

/******************************************************************************************************/

// 25. Array.at()
Array.at();
// Returns a value at the specified index.

// Code
const list25 = [1, 2, 3, 4, 5];
list25.at(1); // 2
list25.at(-1); // 5
list25.at(-2); // 4

/******************************************************************************************************/

// 26. Array.copyWithin()
Array.copyWithin();
// Copies array elements within the array. Returns the modified array.

// NOTE: 🤔
/*
first argument is the target at which to start copying elements from.
second argument is the index at which to start copying elements from.
third argument is the index at which to stop copying elements from.
*/

// Code
const list26 = [1, 2, 3, 4, 5];
list26.copyWithin(0, 3, 4); // [4, 2, 3, 4, 5]

/******************************************************************************************************/

// 27. Array.flat()
Array.flat();
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// Code
const list27 = [1, 2, [3, 4, [5, 6]]];
list27.flat(Infinity); // [1, 2, 3, 4, 5, 6]

/******************************************************************************************************/

// 28. Array.flatMap()
Array.flatMap();
// Returns a new array formed by applying a given callback function to each element of the array,

// Code
const list28 = [1, 2, 3];
list28.flatMap((el) => [el, el * el]); // [1, 1, 2, 4, 3, 9]

/******************************************************************************************************/
