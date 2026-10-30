let a = 100
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Arpit"

    function two() {
        const branch = "AI & ML"
        console.log(username);
    }
    // console.log(branch);

    two()
}

// one()

if (true) {
    const username = "Arpit"
    if (username === "Arpit") {
        const branch = " AI & ML"
        // console.log(`${username}:${branch}`);
    }
    // console.log(branch);
}

// console.log(username);

//  ++++++++++++++++ Important +++++++++++++++++

console.log(add(3))

function add(num){
    return num + 1
}

// add2(3)

const add2 = function(num){
    return num + 2
}
