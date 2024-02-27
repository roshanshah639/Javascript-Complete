// const tinderUser = new Object();
const tinderUser = {};

tinderUser.Id = "1234abc";
tinderUser.name = "Roshan";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "pO7pY@example.com",
  fullName: {
    userfullname: {
      firstname: "Roshan",
      lastname: "Shah",
    },
  },
};

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};
const obj4 = {
  5: "a",
  6: "b",
};
// const obj3 = { obj1, obj2 };
const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "pO7pY@example.com",
  },
  {
    id: 2,
    email: "pO7pY@example.com",
  },
];

users[1].email;
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));

const myObj = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
};


