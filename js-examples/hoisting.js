
// variable hoisting
(function f() {
  console.log(x) // I'm undefined
  var x = 'hello'
  console.log(x) // I'm "hello"
})(); // this just runs the function :)

// What's going on here?
// well when we use var, the variable declaration gets pulled to the top
// this is what's really happening:
(function f2() {
  var x;
  console.log(x) // I'm undefined
  x = 'hello'
  console.log(x) // I'm "hello"
})();

// It's also import to know var is function scoped
// what's that mean? let's take a look
(function f3() {
  for (var i = 0; i < 10; i++) {
    var x = i
  }
  console.log(x)
})();

// prints 9? wouldn't you think x is only accessible in the for loop?
// well this is function scope, this is what is really happening:
(function f4() {
  var i, x;
  for (i = 0; i < 10; i++) {
    x = i
  }
  console.log(x)
})();

// That's some funky behavior...How do we fix it?
// Use let and const
// let and cost are not hoisted(sort of) and have block scope

(function f5() {
  // console.log(x) // This line would break
  let x = 'hello'
  console.log(x) // I'm "hello"
})();

(function f6() {
  for (let i = 0; i < 10; i++) {
    let x = i
  }
  // console.log(x) // This line would break
})();


// There is one weird behavior with let and const however
let x = 2;
(function f6() {
  // console.log(x) // x is not defined even though it's declared above
  let x = 3
})();