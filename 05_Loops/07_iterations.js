const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.map((number) => {
//   return number + 10;
// });

// const newNumbers = [];
// myNumbers.forEach((number) => {
//   newNumbers.push(number + 10);
// });
// console.log(newNumbers);
// console.log(myNumbers);

const newNumbers = myNumbers
  .map((number) => {
    return number * 10;
  })
  .map((number) => {
    return number + 1;
  })
  .filter((number) => {
    return number >= 40;
  });

// console.log(newNumbers);
