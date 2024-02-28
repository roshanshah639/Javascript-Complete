// for of loop
const myNumbers = [11, 22, 33, 44, 55, 66];

// for (const num of myNumbers) {
//   console.log(num);
// }

const greetings = "Hello, World!";
// for (const char of greetings) {
//   console.log(`Each character: ${char}`);
// }

// maps
const map = new Map();
map.set("NP", "Nepal");
map.set("IN", "India");
map.set("US", "USA");
map.set("UK", "United Kingdom");
// map.set("IN", "India"); // not allowed

// console.log(map);
for (const [key, value] of map) {
  console.log(key, " : ", value);
}

const myObject = {
  game1: "NFS",
  game2: "Halo",
  game3: "GTA",
  game4: "Call of Duty",
};

// for (const [key, value] of myObject) {
//   console.log(key, " : ", value);
// }
