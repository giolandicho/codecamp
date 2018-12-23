// A closure is a function with an environment

// This takes what we learned about functional programming into practice
// multiplier is a higher order function that returns another function
// the multiplier function takes a mult param
// the returning function takes a number as a param to be multiplied
function multiplier(mult) {
  return function(number) { // returning function
    // the returning function has access to the mult variable
    // this is even after the multiplier function has returned
    return mult * number
  }
}

const multBy2 = multiplier(2)
console.log(multBy2(6)) // prints 12

const multBy3 = multiplier(3)
console.log(multBy3(6)) // prints 18


// this is also technically a closure
let x = 'hello'
function technicallyAClosure() {
  return x + ' world!'
}
console.log(technicallyAClosure())
