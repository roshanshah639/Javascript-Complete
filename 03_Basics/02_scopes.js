// var c = 400;
// let a = 300;
if (true) {
  let a = 100;
  const b = 200;
  // var c = 300;
  // console.log("Inner", a);
}
// console.log("Outer", a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Roshan";
  function two() {
    const website = "www.google.com";
    // console.log(username);
    // console.log(website);
  }
  // two();
}

// one();

if (true) {
  const username = "Roshan";
  if (username === "Roshan") {
    const website = "www.google.com";
    // console.log(username + " " + website);
  }
  // console.log(website); // not allowed
}
// console.log(website, username); // not allowed

// console.log(addOne(5)); // allowed
function addOne(num) {
  return num + 1;
}
console.log(addOne(5));

// console.log(addTwo(5)); // not allowed
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
