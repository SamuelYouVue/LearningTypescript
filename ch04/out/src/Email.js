"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
var Email = /** @class */ (function () {
    function Email(email) {
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("Invalid email!");
        }
    }
    Email.prototype.validateEmail = function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    return Email;
}());
exports.Email = Email;
