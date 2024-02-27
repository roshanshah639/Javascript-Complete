// singleton

// Object literals
const mySymb = Symbol("key1");
const jsUser = {
  name: "Roshan",
  "full name": "Roshan Shah",
  [mySymb]: "myKeyo1",
  age: 28,
  location: "Kathmandu",
  email: "pO7pY@example.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
};

// console.log(jsUser.name); // not recommended
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser.mySymbol, typeof jsUser.mySymbol);
// console.log(jsUser[mySymb]);

// jsUser["email"] = "roshan.shah@gpt.com";
// Object.freeze(jsUser);
// jsUser["email"] = "roshan.shah@gmail.com";
// console.log(jsUser["email"]);

jsUser.greetings = function () {
  console.log("Hello, Js User!");
};
jsUser.greetings1 = function () {
  console.log(`Hello, ${this.name}`);
};

// console.log(jsUser.greetings());
console.log(jsUser["greetings"]());
console.log(jsUser["greetings1"]());

