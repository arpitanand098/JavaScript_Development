const myArr = [0, 1, 2, 3, 4, 5, true, "Arpit"]
const myHeros = ["IronMan", "Batman", "Thor"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[7]);

// Array Methods

// myArr.push(6) // Adds new value to the array at the end
// myArr.push(7) // Adds new value to the array at the end
// myArr.pop() // removes the last element off the array

// myArr.unshift(9) // Adds a value to the start of the array
// myArr.shift()  // Remove the 0th index element from the array

// console.log(myArr.includes("Arpit"));
// console.log(myArr.indexOf(2));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);