function contract(fn, ...types) {
    if (types.length !== fn.length + 1) {
        throw new TypeError('The number of types does not match the number of arguments + result');
    }

    return function(...args) {
        for (let i = 0; i < args.length; i++) {
            if (args[i].constructor !== types[i]) {
                throw new TypeError(`Invalid argument type at position ${i}. It is expected ${types[i].name}, taked ${args[i].constructor.name}`);
            }
        }
  const result = fn(...args);

        const resultType = types[types.length - 1];
        if (result.constructor !== resultType) {
            throw new TypeError(`Wrong type of result. It is expected ${resultType.name}, taked ${result.constructor.name}`);
        }

        return result;
    };
}


// --- Usage examples ---

// Example 1: Addition of numbers
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.log("Output for addNumbers(2, 3):");
console.dir(res1); 

// Example 2: String concatenation
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello', ' world!');
console.log("Output for concatStrings('Hello', ' world!'):");
console.dir(res2);

// Example 3: Argument type error
try {
    console.log("Attempt to call addNumbers with an invalid type (string instead of number)");
    addNumbers(2, '3');
} catch (e) {
    console.error(e.message);
}
// Example 4: Result type error
const badAdd = (a, b) => a + String(b);
const addNumbersStrict = contract(badAdd, Number, Number, Number);

try {
    console.log("Attempted to call addNumbersStrict which returns an invalid type:");
    addNumbersStrict(2, 3);
} catch (e) {
    console.error(e.message);
}
