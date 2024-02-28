// if
// if (true) {
//   console.log("True");
// }

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//   // console.log("User is logged in");
// } else {
//   // console.log("User is not logged in");
// }
// // const temperature = 41;
// if (temperature < 50) {
//   // console.log("Less than 50");
// } else {
//   // console.log("Greater than 50");
// }

// const score = 200;

// if (score > 100) {
//   const power = "Can Fly.";
//   console.log(`User Power: ${power}`);
// } else {
//   console.log("User Power: Can't Fly.");
// }
// console.log(`User Power: ${power}`); // not allowed

// const balance = 1000;
// if (balance > 500) {
//   console.log("User has balance of 1000");
// } else {
//   console.log("User has balance of less than 1000");
// }

// const balance = 1000;
// if (balance < 500) {
//   console.log(`User has balance of ${balance}`);
// } else if (balance < 750) {
//   console.log(`User has balance of ${balance}`);
// } else if (balance < 900) {
//   console.log(`User has balance of ${balance}`);
// } else {
//   console.log(`User has balance of ${balance}`);
// }

// const userLoggedIn = true;
// const debitCard = true;
// if (userLoggedIn && debitCard && 2 === 2) {
//   console.log("User is logged in and has a debit card");
// } else {
//   console.log("User is not logged in or does not have a debit card");
// }

const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User is logged in from Google or Email");
} else {
  console.log("User is not logged in from Google or Email");
}
