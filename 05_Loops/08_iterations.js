// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const initialValue = 0;
// const sumOfMyNumbers = myNumbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumOfMyNumbers);

const shoppingCart = [
  {
    itemName: "Javascript Course",
    itemPrice: 2999,
  },
  {
    itemName: "Python Course",
    itemPrice: 3999,
  },
  {
    itemName: "Java Course",
    itemPrice: 4999,
  },
  {
    itemName: "C++ Course",
    itemPrice: 5999,
  },
  {
    itemName: "C# Course",
    itemPrice: 6999,
  },
];

const cartTotal = shoppingCart.reduce((acc, item) => {
  return acc + item.itemPrice;
}, 0);

console.log(cartTotal);
