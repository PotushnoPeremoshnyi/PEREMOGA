const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error(`Expected type 'function' but received none '${typeof fn}'`);
    }
  }
  return x => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const fpipe1 = pipe(inc, twice, cube);
const x1 = fpipe1(5);
console.log(`Resault 1: **${x1}**`); // 1728

const fpipe2 = pipe(inc, inc);
const x2 = fpipe2(7);
console.log(`Resault 2: **${x2}**`); // 9

try {
  const fpipeError = pipe(inc, 7, cube);
} catch (e) {
  console.error(`Erorr when calling pipe: **${e.message}**`);
}
