class Counter {
    private _i: number;
    constructor() {
        this._i = 0;
    }
    get(): number {
        return this._i;
    }
    set(val: number): void {
        this._i = val;
    }
    increment(): void {
        this._i++;
    }
}
var counter = new Counter();
console.log(counter.get()); // 0
counter.set(2);
console.log(counter.get()); // 2
counter.increment();
console.log(counter.get()); // 3
//console.log(counter._i); // Error: Property '_i' is private