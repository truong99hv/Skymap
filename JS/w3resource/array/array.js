// 1. Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
console.log("1.");
var is_array = (input) => {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));
console.log(toString.call([1, 2, 4, 0]));

console.log("-----------");
console.log("2.");

// 2. Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

const array_Clone = (arra1) => {
  return arra1.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

console.log("-----------");
console.log("3.");

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
const first = (array, n) => {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
console.log("-----------");
console.log("4.");

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
const last = (array, n) => {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  if (n > array.length) return array;
  if (n < 0) return [];
  return array.slice(array.length - n);
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2, 1, 2], 3));
console.log(last([7, 9, 0, -2], 6));

console.log("-----------");
console.log("5.");
//5. Write a simple JavaScript program to join all elements of the following array into a string.
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join(""));
console.log(myColor.join("+"));

console.log("-----------");
console.log("5.");
// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
const even_number = (num) => {};

console.log("aa aa".split(""));
