// read this first https://www.w3schools.com/js/js_this.asp

console.log(this); // returns {} because it's not in a function!
console.log(global); // global object

(function f() {
  console.log(this); // global object
})();

const obj = {
  a: 'hello',
  printThis: function() {
    console.log(this)
  }
};

console.log(obj.printThis()); // prints the owner object { a: 'hello', printThis: [Function: printThis] }

// creating an object using the new operation
function whale(name) {
  this.name = name
  this.getName = function() {
    return this.name
  }
};
const s = new whale('billy'); // creates a new object
console.log(s.getName()); // prints billy

// what if we forget the new?
const s2 = whale('billy');
// well now this runs as a function instead of a constructor
// so the function runs, and this.name gets set in our global object
// this.getName also gets set in the global object
console.log(global.name); // prints billy


// Remember we talked about arrow functions a while back?
// What do they do?
// Well they bind this lexically 

const obj2 = {
  a: 'hello',
  printThis: () => {
    console.log(this)
  }
};
obj2.printThis() // prints {}