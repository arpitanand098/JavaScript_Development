const accountId = 144553
let accountEmail ="arpit@gmail.com"
var accountPassword = "123456"
accountCity = "Patna"
let accountState;

accountEmail = "anand@gmail.com"
accountPassword = "231425"
accountCity = "Indore"

console.log(accountId);
/*
Prefer Not To use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])