const composeSafe = (...fns) => {
  const handlers = {};

  const f = initialValue => {
    let result = initialValue;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        const fn = fns[i];
        if (typeof fn !== 'function') {
        }
        result = fn(result);
      }
      return result;
    } catch (e) {
      if (handlers['error']) {
        handlers['error'].forEach(handler => handler(e));
      }
      return undefined;
    }
  };
  f.on = (event, handler) => {
    if (!handlers[event]) {
      handlers[event] = [];
    }
    handlers[event].push(handler);
  };
  
  return f;
};
const thrower = x => {
  if (x === 8) throw new Error('Special error when x = 8');
  return x * 10;
};

const adder = x => x + 1;

const safeFunc = composeSafe(thrower, adder);
safeFunc.on('error', (e) => {
  console.log(`The error handler caught: **${e.message}**`);
});

const res1 = safeFunc(7); 
console.log(`Result 1 (no error): **${res1}**`); //80

const res2 = safeFunc(8); 
console.log(`Result 2 (with error): **${res2}**`); //undefined  