function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(
            name => {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}

class Animal {
    eat(): string {
        return "Delicious!";
    }
}

class Mammal extends Animal {
    breathe(): string {
        return "I'm alive!";
    }
    move(): string {
        return "I can move like a mammal!";
    }
}
class WingedAnimal extends Animal {
    fly(): string {
        return "I can fly!";
    }
    move(): string {
        return "I can move like a bird!";
    }
}

class Bat1 implements Mammal, WingedAnimal {
    eat: () => string;
    breathe: () => string;
    fly: () => string;
    move: () => string;
}
applyMixins(Bat1, [Mammal, WingedAnimal]);

var bat1 = new Bat1();
//bat1.eat(); // Error: not a function

console.log(bat1.breathe()); // I'm alive!
console.log(bat1.fly()); // I can fly!"
console.log(bat1.move()); // I can move like a bird
