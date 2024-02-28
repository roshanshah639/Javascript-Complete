const user = {
  username: "Chaitanya",
  price: 999,

  welcomeMessage: function () {
    console.log(`Hello ${this.username},  Welome to Website.`);
    console.log(this);
  },
};
// console.log(user.welcomeMessage());
// user.username = "Roshan";
// console.log(user.welcomeMessage());

// console.log(this);

// function myFunction() {
//   let username = "Roshan";
//   console.log(this.username);
// }

// myFunction();

// const myFunction = () => {
// let username = "Roshan";
// console.log(this);
// };

// myFunction();

// const addTwo = (num1, num2 ) => {
//   return num1 + num2
// }
// console.log(addTwo(5, 6))
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => ({
//   username: "Roshan",
// });

// console.log(addTwo());

const myArray = [200, 400, 100, 600];
// myArray.forEach((num) => {
//   console.log(num);
// });


