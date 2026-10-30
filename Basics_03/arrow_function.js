const user = {
    username: "Arpit",
    winning: 500,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to Gambling`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Abhay"
// user.welcomeMessage()
// console.log(this);


// function student() {
//     let student_name = "Arpit"
//     console.log(this.student_name);
// }

// student()

const student = () => {
    let student_name = "Arpit"
    console.log(this);
}

// student()

// const addition = (num1, num2) => {
//     return num1 + num2  Explicit Return
// } Basic Arrow function

const addition = (num1, num2) =>  (num1 + num2) // Implicit Return

console.log(addition(5, 4));