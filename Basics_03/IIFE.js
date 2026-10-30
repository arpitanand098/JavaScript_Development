// Immediately Invoked Function Expressions (IIFE)

(function network() {
    // named IIFE
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("Arpit")
