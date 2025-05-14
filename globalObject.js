
//? Global Object - it is an object that stores all the functions of javascript like :

// console.log(), Math.random(), setInterval(), new String("")  etc.

// these functions can be used anywhere in code and are present as a key in global object.
// global object is the biggest object of javascript which can be accessed from anywhere in code.

//^ global object has different names in different environments.

// Google Chrome - it is called "window".
// Node.js - it is called "global".
console.log(global);

// if we write "window.Math.random()" in chrome, it will still generate output as it is global object.
// if we write "window" in chrome, it opens window ojbect with every function of js as keys.
// window has many properties like .open to open new webpage, .scroll to scroll web page by command.

// if we declare a variable then it is also part of window/global object.
// var a = 10
// window.a                      // output : 10

//^ we dont need to write window or global to access global object properties.


// since global object has different names in diff. env. it is confusing to learn all names.

// console.log(window.Math.random());
//  output - ReferenceError: window is not defined

// and one environment deos not recognize the name of another environment.

//^ We can use  " globalThis " to access global object irrespective of the environment.

console.log(globalThis.Math.random());




//^ NOTE -   " let " and " const " are not the part of global object.