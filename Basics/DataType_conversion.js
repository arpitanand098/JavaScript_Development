let score = "42arp"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // NaN

// "33" => 33
// "42abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

let number = 42
let string = String(number)
// console.log(string);
// console.log(typeof string)

// ********* Operations ***********

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " Arpit"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
