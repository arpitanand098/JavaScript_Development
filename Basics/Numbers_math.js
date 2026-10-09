const score = 42
// console.log(score);

const balance = new Number(1945)
// console.log(balance);

// console.log(balance.toString());

const otherNum = 23.8789

// console.log(otherNum.toPrecision(3));

const num2 = 1000000
// console.log(num2.toLocaleString('en-IN'));

//+++++++++++++++ Maths ++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-3));
// console.log(Math.round(3.567));
// console.log(Math.ceil(4.23));
// console.log(Math.floor(4.23));
// console.log(Math.min(4,5,6,1,2,3));
// console.log(Math.max(4,5,6,1,2,3));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)