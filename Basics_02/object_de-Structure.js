const course ={
    courseName: "JS in Hindi",
    Price: "$99",
    courseInstructor: "Hitesh"
}

// console.log(course["courseInstructor"])

const {courseInstructor: Instructor} = course // Object Destructuring
console.log(Instructor);



