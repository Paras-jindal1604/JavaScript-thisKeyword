
//* this keyword in javascript
// it is a special keyword that refers to the context in which the current code is being executed.
// its value depends on how the function where "this" is used is called.


//! Note -  The this keyword refers to different objects depending on how it is used.
//  examples of different contexts of this keyword -

//? In an object method, this refers to the object.
//? Alone, this refers to the global object.
//? In a function, this refers to the global object.
//? In a function, in strict mode, this is undefined.
//? In an event, this refers to the element that received the event.
//? Methods like call(), apply(), and bind() can refer this to any object.

//!  Note  -  this is not a variable. It is a keyword. You cannot change the value of this



// ------------------------------ different context of this keyword


//* 1. Global context (outside any function) - it is part of global scope


//^ a. in browser console - 

//? console.log(this);
// Output -  window object properties because it refers to global object in global context.

//? console.log(this === window);
// output - true     bcz this refers to window/global object in global context.


//^  b. in Node.js - modules exports object

console.log(this);
//  output  :  {}    an empty object which is called module's exports object





//* 2. Inside a function

//^ a. In strict mode  - it is undefined for a strict mode function.

"use strict";

function strictfun(){
    return this;
}

console.log(strictfun());

//  output - global object 

//  explanation -  it was called in global context so output is global not undefined

// function strictfun(){
//     console.log(this); // Expected to be undefined in strict mode
// }
// strictfun(); // Called in global context


// since i have called this in 1.b. so now it is part of global object, 
// if i comment that then it will be undefined as part of strict mode,

// or

// if we use - "use strict" at the top of code, then output of both strict/regular functions will be undefined.


//^ b. In non-strict mode -  it refers to the global object for a non-strict or regular function.


function nonstrict(){
    console.log(this);
}

nonstrict();

// output : global object





//* 3. Inside a Method (object context)

// when this is used inside object's method, it refers to the object inside which it is created.

const obj = {
    name : "batman",
    age : 23, 
    greet : function(){
        console.log(this);
        console.log(this.name);
    }
}

obj.greet();
// this refers to the object in which it is present, so we can access that objects keys using keys.




// ------------------------------------------------------


//* 4. Inside Arrow function

//^ NOTE -  Arrow function does not have its own this, instead it inherit this from its surrounding scope.

let obj2 = {
    name : "falana",
    meet : ()=>{
        console.log(this);
    }
}

obj2.meet();

//  output : {}

// explanation - because arrow functin dont have its own this, it get it from its object scope
// in which it is defined and object is part of global scope, so it also return global context {}.





let obj3 = {
    name : "dikana",
    jeet : function () { 
        let ab = ()=>{
            console.log(this);
        }
        ab();
    }
}

// there is a function ab with this inside another function inside an object.

obj3.jeet();
// output : { name: 'dikana', jeet: [Function: jeet] }
// here, output of this is the object in which it is created

// explanation - since arrow function ab dont have its own this keyword so it will take it from its 
// surrounding and it is surrounded by a function jeet, so it will take this keyword from jeet.
// and a function inside an object uses this keyword to refer to the object inside which it is present.
// so now, ab shows the object in which it is created.



//* 5. Inside a constructor or Class 

// "this" refers to instance of object being created.

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let p = new Person("batman",23);
console.log(p);





// Note -  a variable "var x" declared inside a function is not a part of global scope.
//  let and const are not part of global scope because they are block scope variables.
// we want them to accessed outside the block in which they are created.


