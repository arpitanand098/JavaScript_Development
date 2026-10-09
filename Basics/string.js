const name = "Arpit"
const repoCount = 3

// console.log(name + repoCount)

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}.`);

const gameName = new String("Foot-ball")

// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,6);
console.log(anotherString)

const newStringOne = "    Arpit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arpit.com/arpit%42anand"

console.log(url.replace('%42', '__'))
console.log(url.includes('arpit'))

console.log(gameName.split('-'))