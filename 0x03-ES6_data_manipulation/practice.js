// const arr = [];
// arr.push('Mercy', 23, 'Female');

// arr[5] = 'Developer';
// arr.length = 2;

// console.log(arr);

// console.log(arr[5]);
// console.log(Object.keys(arr));
// console.log(arr.length);
// console.log(arr);
// arr.copyWithin(0, 1, 2);
// const arr2 = arr.slice().copyWithin(0, 1, 2);

// const arr3 = [...arr].copyWithin(0, 1, 2);
// console.log(arr);
// console.log(arr2);
// console.log(arr3);

// const arrayLike = {
//   0: 'a',
//   1: 'b',
//   length: 2,
// };

// console.log(Array.prototype.join.call(arrayLike, '+'));

// let myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');
// for (const x of myMap) {
//   console.log(x);
// }
// console.log(myMap);

// let myArray = [1, 2, 3, 4];
// let sum = myArray.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

let myArray = [1, 2, 3, 4];
let evenNos = myArray.filter((currentValue) => {
  return currentValue % 2 === 0;
});
console.log(evenNos);
