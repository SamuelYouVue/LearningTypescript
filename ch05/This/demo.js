// function f1() {
//     return this;
// }
// console.log(f1());

// console.log(this); // global (window)
// function f2() {
//     "use strict";
//     return this; // undefined
// }
// console.log(f2()); // undefined
// console.log(this); // window

// var p = {
//     age: 37,
//     getAge: function () {
//         return this.age; // this points to the class instance (p)
//     }
// };
// console.log(p.getAge()); // 37

// function Person() { }
// Person.prototype.age = 37;
// Person.prototype.getAge = function () {
//     //return this.age;
//     return this;
// }
// var p = new Person();
// console.log(p.age); // 37
// console.log(p.getAge()); // 37

function Person() { // function used as a constructor
    this.age = 40;
    return this;
}
console.log(Person());
this.a = 1;
console.log(this.a);
var p = new Person();
console.log(p.age); // logs 40