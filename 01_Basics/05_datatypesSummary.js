// Primitive => 7 => string, number, boolean, null, undefined, symbol, bigint
const score = 100;
const scoreValue = 99.99;

const isLoggedIn = false;
const outsideTemp = null;
const x = undefined;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

const bigNum = 46565654657835787548757n;
// console.log(typeof bigNum);

// Reference => 3 => object, array, function

const heroes = ["Thor", "Marvel", "Captain"]; //Array

// Object
const person = {
  name: "Roshan",
  age: 28,
  isLoggedIn: true,
};

// Function
const myFunction = () => {
  console.log("Hello World!");
};


