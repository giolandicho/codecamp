/////       JAVASCRIPT CHEAT SHEET            /////

// Double slash for single line comments like java!

/*
  forward slash + asterisk for multiline also like java
*/


// let's dive into some basic syntax

// There's three ways to declare variables

  // The old way:

  var a = 'hello'

  // The new way

  const c = 'hello' // use const as much as possible

  let b = 'hello' // use let when you can't use const

  // you should almost never use var, we'll see why later  

// output to the console via console.log
  console.log(a)
  console.log(b)
  console.log(c)
  console.log('hello')


// how to declare functions

  // function syntax
  function square1(x) {
    return x * x // returns x^2 (What if x isn't a number??)
  }

  // arrow syntax
  const square2 = () => {
    return x * x
  }  


// What about types?
  const num = 45
  const nan = NaN // type not a number, what if you multiply two strings?

  const str1 = 'string with single quotes' // strings can use single or double quotes
  const str2 = "string with double quotes" // strings can use single or double quotes

  const bool1 = true
  const bool2 = false

  const obj = {} // how you create an object
  const obj2 = { // an object with a property of a that equals 'prop1'
    a: 'prop1'
  }
  const nll = null // null is “reference to a non-existing object”
  const undef = undefined // no value assigned 

  const arr = [] // how to declare an array (it's an object under the hood)
  const arr2 = [1, 2, 3, 4, 5] // array of numbers
  const arr3 = ['hello', 2, 4, {}] // array of numbers, strings, and objects

  // typeof operator tells you the type...kinda
  console.log(typeof str1) // prints string
  console.log(typeof 4) // prints number
  console.log(typeof bool1) // prints boolean
  console.log(typeof obj) // prints object
  console.log(typeof arr) // object, like we said above
  console.log(typeof undefined) // prints undefined
  // but why did I say kinda?
  console.log(typeof NaN) // prints number...yes, Not a Number is a Number
  console.log(typeof null) // prints object...non-existing object is an object. OK js.

  // js types are weird and you can get some unexpected behavior
  // const x = [] + {}
  // const y = {} + []
  // Adding arrays and objects, weird right? but stay with me
  // do you think x and y are the same? I would think so
  // uncomment out the following code
  /*
    console.log([] + {})
    console.log({} + [])
  */

// conditionals

  // two ways to check equality

  // double equals (NEVER USE)
  // this does NOT check types
  console.log(100 == "100") // Yep, that's true!

  // triple equals
  // use this always
  console.log(100 === "100") // false!

  // very similar to Java conditionals
  if (100 === "100") {
    console.log('fake news')
  } else if (101 === '100') {
    console.log('also fake news')
  } else {
    console.log('hello world')
  }

  // you can also use conditionals to check if a string exists
  const s = '' // change this to another string and see what happens

  if (!s) {
    console.log('s is an empty string!')
  }

  if (s) {
    console.log('s is not an empty string!')
  }

  // ternary operators are very useful
  const someX = 3 // change this and see what tern becomes
  const tern = (someX === 3) ? 'someX is 3' : 'someX is not 3'
  console.log(tern)
  // if someX === 3 we "return" the string 'someX is 3' if not, we "return" the string 'someX is not 3'

// loops

  // while loop, much like java
  let whileCount = 0
  while (whileCount < 10) {
    console.log('while ' + whileCount) // string concat
    whileCount++
  }

  // for loop
  for (let i = 0; i < 10; i++) {
    console.log('for ' + i)
  }

// More on objects
  // passed by reference, not by value
  const obj3 = {}
  const obj4 = obj3
  obj4.foo = 'bar'
  console.log(obj3) // prints { foo: 'bar' }
