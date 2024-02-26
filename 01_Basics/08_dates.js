let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date("2023-05-01");
let myCreatedDate = new Date("2023-05-01");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(
//   `${newDate.getFullYear()} ${newDate.getMonth() + 1} ${newDate.getDate()}`
// );
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  })
);
