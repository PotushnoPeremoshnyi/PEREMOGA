// 6.1
function average(a, b) {
  return (a + b) / 2;
}

// 6.2
function square(x) {
  return x * x;
}

// 6.3
function cube(x) {
  return x * x * x;
}

// 6.4
function calculate() {
  const squares = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    squares.push(average(sq, cb));
  }
  return squares;
}