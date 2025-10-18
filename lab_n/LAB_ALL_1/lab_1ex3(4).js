const arry = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  null, undefined, Symbol('s'), BigInt(100), { a: 1 }, [1, 2, 3], function () {}
];


const couont = {};


for (const item of arry) {

  let type = typeof item;


  if (Array.isArray(item)) {
    type = 'array';
  }


  if (!couont[type]) {
    couont[type] = 1;
  } else {
    couont[type]++;
  }
}

console.log(couont);
