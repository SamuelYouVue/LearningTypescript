var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var firstName = "Sachin";
var lastName = "Tendulkar";
var topic = "Typescript";
function say(strings) {
    var expr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        expr[_i - 1] = arguments[_i];
    }
    var str = '';
    strings.forEach(function (string, i) {
        str += string + (expr[i] || '');
    });
    console.log(strings.raw);
    console.log(strings);
    return str;
}
console.log(say(__makeTemplateObject(["Welcome, ", " ", ". Learn ", " here"], ["Welcome, ", " ", ". Learn ", " here"]), firstName, lastName, topic));
