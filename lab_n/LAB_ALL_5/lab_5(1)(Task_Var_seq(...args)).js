function seq(...args) {
  let functions = args;
  const next = (...nextArgs) => {
    if (nextArgs.length > 0 && typeof nextArgs[0] === 'number') {
      const initialValue = nextArgs[0];
      return functions.reduce((acc, fn) => fn(acc), initialValue);
    } else {
      functions = functions.concat(nextArgs);
      return next;
    }
  };

  return next;
}
//Example 1
const res1 = seq(x => x + 7)(x => x * 2)(5);
console.log(`// Результат: ${res1}`);
// Exepeted: 17

// Exapmle 2
const res2 = seq(x => x * 2)(x => x + 7)(5);
console.log(`// Результат: ${res2}`);
// Exepeted: 24

// Exapmle 3
const res3 = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7);
console.log(`// Результат: ${res3}`);
// Exepeted: 3
