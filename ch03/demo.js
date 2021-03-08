function add() {
    var foo = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        foo[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}
// add(); // returns 0
// add(2); // returns 2
// add(2, 2); // returns 4
// add(2, 2, 2); // returns 6
// add(2, 2, 2, 2); // returns 8
// add(2, 2, 2, 2, 2); // returns 10
// add(2, 2, 2, 2, 2, 2); // returns 12
function add1() {
    var foo = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        foo[_i] = arguments[_i];
    }
    var result = 0;
    //var args = Array.prototype.slice.call(arguments);
    // Using an array literal is shorter than above but allocates an empty array
    var args = [].slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    return result;
}
//add1(2, 2, 2, 2); // returns 8
console.log(add.length);
console.log(add1.length);
function test(value) {
    switch (typeof value) {
        case "string":
            return "My name is " + value + ".";
        case "number":
            return "I'm " + value + " years old.";
        case "boolean":
            return value ? "I'm single." : "I'm not single.";
        default:
            console.log("Invalid Operation!");
    }
}
console.log(test.call(null, "dd"));
