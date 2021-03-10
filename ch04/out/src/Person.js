"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
    Person.prototype.greet = function () {
        console.log("Hi!");
    };
    return Person;
}());
exports.Person = Person;
