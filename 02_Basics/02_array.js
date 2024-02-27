const marvelHeroes = ["Thor", "Captain America", "Hulk"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);
// console.log(marvelHeroes);

const allHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const usableArr = anotherArr.flat(Infinity);
// console.log(anotherArr);
// console.log(usableArr);

// let isArr = Array.isArray(marvelHeroes);
// let isArr = Array.from("marvelHeroes");
// let isArr = Array.from({name: "Roshan", age: 28}); // interesting
// console.log(isArr);

let score1 = 100;
let score2 = 200;
let socre3 = 300;
// let scoreArray = [score1, score2,socre3];
let scoreArray = Array.of(score1, score2, socre3);
// console.log(scoreArray);
