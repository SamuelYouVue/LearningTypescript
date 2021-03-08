function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5;
}
var bar = foo();
console.log(bar.next()); // Object {value: 1, done: false}
console.log(bar.next()); // Object {value: 2, done: false}
console.log(bar.next()); // Object {value: 3, done: false}
console.log(bar.next()); // Object {value: 4, done: false}
console.log(bar.next()); // Object {value: 5, done: true}
console.log(bar.next()); // Object { done: true }
alert('done.');