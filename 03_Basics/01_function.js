function sayName() {
  console.log("Chaitanya");
}
// sayName();

function addNums(num1, num2) {
  return num1 + num2;
}

let result = addNums(20, 30);
// console.log(result);

function loginUserMesage(username = "Chaitanya") {
  if (!username) {
    console.log("Please provide a username");
  } else {
    return `${username} is just logged in`;
  }
}
// console.log(loginUserMesage("Chaitanya"));
// console.log(loginUserMesage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(100, 200, 400, 500, 2000));

const user = {
  username: "Chaitanya",
  price: 199,
};

function handleObject(anyObj) {
  console.log(`Hello, ${anyObj.username}. Your Cart Total is ${anyObj.price}`);
}
// handleObject(user);
// handleObject({
//   username: "Roshan",
//   price: 599,
// });

const myArray = [200, 400, 100, 600];
function handleArray(getArray) {
  return getArray[3];
}

// console.log(handleArray(myArray));
// console.log(handleArray([200, 400, 100, 600]));

