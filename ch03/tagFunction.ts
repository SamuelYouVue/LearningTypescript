let firstName: string = "Sachin"
let lastName: string = "Tendulkar"
let topic = "Typescript"

function say(strings: TemplateStringsArray, ...expr: string[]) {
    let str = '';
    strings.forEach((string, i) => {
        str += string + (expr[i] || '');
    });
    console.log(strings.raw);
    console.log(strings);
    return str;
}

console.log(say`Welcome, ${firstName} ${lastName}. Learn ${topic} here`);




