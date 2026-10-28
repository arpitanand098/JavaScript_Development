function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
}

// sayMyName (It only gives reference to the function not executes it)
// sayMyName()

// function addition(num1, num2) {

//     console.log(num1 + num2);
// } (This will not Return any value)

function addition(num1, num2) {

    // let sum = num1 + num2
    // return sum
    return num1 + num2
}

const sum = addition(2, 3)

// console.log("Sum: ", sum);

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username")
        return
    }
    else {
        return `${username} just Logged in.`
    }
}

// console.log(loginUserMessage("Arpit"));
// console.log(loginUserMessage());

function calculatePrice(val1, val2, ...num1){
    return num1
}

console.log(calculatePrice(200, 400, 500, 1000))

const user = {
    username: "Arpit",
    RollNo: 42
}

function handleObject(anyobject){
    console.log(`Student Name is ${anyobject.username} and registration number is ${anyobject.RollNo}`);
}

// handleObject(user)

handleObject({
    username: "Shristy",
    RollNo: 38
})

const myNewArray = [36, 38, 39, 42, 23]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([36, 38, 39, 42]));