"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Person_1 = require("./Person");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, surname, email, subjects) {
        var _this = _super.call(this, name, surname, email) || this;
        _this.subjects = subjects;
        return _this;
    }
    Teacher.prototype.greet = function () {
        _super.prototype.greet.call(this);
        console.log("I teach " + this.subjects);
    };
    Teacher.prototype.teach = function () {
        console.log("Welcome to Maths class!");
    };
    return Teacher;
}(Person_1.Person));
exports.Teacher = Teacher;
