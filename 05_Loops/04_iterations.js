const myObject = {
  js: "JavaScript",
  ts: "TypeScript",
  py: "Python",
  java: "Java",
  c: "C",
  cpp: "C++",
  csharp: "C#",
};

for (const key in myObject) {
  // console.log(key, "shortcuot is for : ", myObject[key]);
}

const myNumbers = [11, 22, 33, 44, 55, 66];

for (const num in myNumbers) {
  // console.log(num, ": ", myNumbers[num]);
}

const map = new Map();
map.set("NP", "Nepal");
map.set("IN", "India");
map.set("US", "USA");
map.set("UK", "United Kingdom");

