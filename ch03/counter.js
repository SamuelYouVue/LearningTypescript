var Counter = /** @class */ (function () {
    function Counter() {
        this._i = 0;
    }
    Counter.prototype.get = function () {
        return this._i;
    };
    Counter.prototype.set = function (val) {
        this._i = val;
    };
    Counter.prototype.increment = function () {
        this._i++;
    };
    return Counter;
}());
var counter = new Counter();
console.log(counter.get()); // 0
counter.set(2);
console.log(counter.get()); // 2
counter.increment();
console.log(counter.get()); // 3
//console.log(counter._i); // Error: Property '_i' is private
