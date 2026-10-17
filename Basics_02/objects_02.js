const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "3012"
tinderUser.name = "Arpit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "name@gmail.com",
    fullname: {
        UserFullname: {
            firstName: "Arpit",
            lastName: "Anand"
        }
    }
}

// console.log(regularUser.fullname.UserFullname.firstName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // First is {} target element and after that every (obj1, obj2, obj3) is source element

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id : 1401,
        email: "s@gmail.com"
    },
    {
        id : 1502,
        email: "a@gmail.com"
    },
    {
        id : 3012,
        email: "aa@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // This will return array of keys and we can apply array properties & operation on this.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


