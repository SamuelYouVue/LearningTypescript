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
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        return "Delicious!";
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mammal.prototype.breathe = function () {
        return "I'm alive!";
    };
    Mammal.prototype.move = function () {
        return "I can move like a mammal!";
    };
    return Mammal;
}(Animal));
var WingedAnimal = /** @class */ (function (_super) {
    __extends(WingedAnimal, _super);
    function WingedAnimal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WingedAnimal.prototype.fly = function () {
        return "I can fly!";
    };
    WingedAnimal.prototype.move = function () {
        return "I can move like a bird!";
    };
    return WingedAnimal;
}(Animal));
var Bat1 = /** @class */ (function () {
    function Bat1() {
    }
    return Bat1;
}());
applyMixins(Bat1, [Mammal, WingedAnimal]);
var bat1 = new Bat1();
//bat1.eat(); // Error: not a function
console.log(bat1.breathe()); // I'm alive!
console.log(bat1.fly()); // I can fly!"
console.log(bat1.move()); // I can move like a bird
