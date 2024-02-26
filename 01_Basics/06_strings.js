const name = "Roshan";
const repoCount = 50;

// console.log(name + " " + repoCount);

// console.log(`My name is ${name} and I have ${repoCount} repositories`);

const gameName = new String("Cricket-cup");
// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("c"));

const newStr = gameName.substring(0, 4);
// console.log(newStr);

const anotherStr = gameName.slice(-8, -4);
// console.log(anotherStr);

const newStr1 = "     roshan     ";
// console.log(newStr1);
// console.log(newStr1.trim());

const url = "https://www.google.com/roshan%20shah";
// console.log(url);
const newUrl = url.replace("%20", "-");
// console.log(newUrl);

const incStr = url.includes("shah");
// console.log(incStr);

const newGame = new String("roshan-shah-rs");
// console.log(newGame.split("-"));


