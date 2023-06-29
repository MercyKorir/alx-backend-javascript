// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Lion extends Cat {
//   speak() {
//     super.speak(); //references speak() method in parent class
//     console.log(`${this.name} roars.`);
//   }
// }

// const l = new Lion('Simba');
// l.speak();
// // Fuzzy makes a noise.
// // Fuzzy roars.

const firstName = 'Mercy';
const no = 24;
const arr = ['Mercy', 25];

console.log(typeof firstName === 'string');
console.log(typeof no === 'number');
console.log(Array.isArray(arr));
for (const item of arr) {
  console.log(typeof item === 'string');
}
