const marvel_heros = ["Thor", "Ironman", "Captain America"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

const allHeros = [...marvel_heros, ...dc_heros] // Spread Operator

// console.log(allHeros);

const mixed_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]]

const real_array = mixed_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Arpit"));
console.log(Array.from("Arpit"));
console.log(Array.from({name: "Arpit"})); // Interseting For Interviews

let score1 = 42
let score2 = 38
let score3 = 36

console.log(Array.of(score1, score2, score3));