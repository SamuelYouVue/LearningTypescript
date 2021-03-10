var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.greet = function (city, country) {
        // we use the this operator to access name and surname
        var msg = "Hi, my name is " + this.name + " " + this.surname + ". ";
        msg += "I'm from " + city + " (" + country + ").";
        console.log(msg);
    };
    return Person;
}());
var SuperHero = /** @class */ (function (_super) {
    __extends(SuperHero, _super);
    function SuperHero(name, surname, superpower) {
        var _this = _super.call(this, name, surname) || this;
        _this.superpower = superpower;
        return _this;
    }
    SuperHero.prototype.userSuperPower = function () {
        return "I'm using my " + this.superpower;
    };
    return SuperHero;
}(Person));
// var person = new Person("remo", "jansen");
// person.greet("Seville", "Spain");
// Hi, my name is remo jansen. I'm from Seville (Spain)
