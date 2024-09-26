const array1 = new Array();
const array5 = new Array(5);  // Creates an array with 5 undefined elements
const x = new Array(4);
console.log(x);
let arr2 = new Array({ length: 5 }); // this an array with only one element that has 
// an object of length with value of 5

const array3 = new Array(length = 3); // actual array with 3 elements
const array4 = Array.from({ length: 5 }, () => [0, 0, 0]); // create a multi-dimensional array
console.log(arr2[0].length + " arr2 length " + arr2.length);
console.log(" array3 length " + array3.length);
console.log(array4);

array1.push('hello');
arr2.push('world');
arr2[0] = 'yolo';
console.log(array1);
console.log(arr2 + " length is " + arr2.length);

