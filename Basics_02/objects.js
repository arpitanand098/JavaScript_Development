// Singleton
// Object.create

// object literals
const mysym = Symbol("key1")

const js_User = {
    name: "Arpit",
    "full name": "Arpit Anand",
    [mysym]: "mykey1", // Use Square brackets for referring symbol otherwise it will refer to string
    age: 20,
    location: "Patna",
    email: "arpit301@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(js_User.age);
// console.log(js_User["age"]);
// console.log(js_User["full name"]);
// console.log(js_User[mysym]);

js_User.age = 20
// Object.freeze(js_User)
js_User.age = 35
// console.log(js_User);

js_User.gretting = function(){
    console.log("Hello Js user");
}
js_User.grettingTwo = function(){
    console.log(`Hello ${this.name}!!`); //string manipulation
}

console.log(js_User.gretting());
console.log(js_User.grettingTwo());