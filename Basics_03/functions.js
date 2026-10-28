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
console.log(loginUserMessage());
