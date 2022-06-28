// 1. Do you like bananas?
console.log(("b" + "a" + +"a" + "a").toLowerCase());
// → banana

let banana = 'b' + 'a' + (+ 'a') + 'a';
console.log(banana);
// → baNaNa
console.log(banana.toLowerCase())
// -> banana


// Explanation
// Let’s see what’s going on step by step. The first part (’b’ + ‘a’) is working as expected. However, the magic relies on this part + + ‘a’. JavaScript tries to cast the next code automatically + ‘a’ to a String. This causes the following result, NaN. Finally, JavaScript concatenates ’ba’ + NaN resulting in this string ‘baNaNa’. We can use the function `.toLowerCase()` to see this ’banana’.


// 2. Of course it’s true, right?
console.log(1 < 2 < 3);
// -> true
console.log(3 > 2 > 1);
// -> false


// Explanation
// Well, this is weird, isn’t it? It happens because of the way JavaScript evaluates code. Let’s see…
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true
3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false



// 3. Adding Arrays
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'


// Explanation
// The concatenation is performed as follows.

[1, 2, 3] +
 [4, 5, 6][
 // call toString()
 (1, 2, 3)
 ].toString() +
 [4, 5, 6].toString();
// concatenation
"1,2,3" + "4,5,6";
// -> ("1,2,34,5,6");



// 4. Math.max() is less than Math.min()?
Math.min() > Math.max(); // -> true


// Explanation
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Infinity > -Infinity; // -> true


// 5. Detect the height of the app by using JS
console.log(window.innerHeight);