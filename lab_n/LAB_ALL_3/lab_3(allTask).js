
function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min) + min);
}

function genKey(length, characters) {
  let result = '';
  for (let i = 0; i < length; i++) {
    const index = random(characters.length);
    result += characters[index];
  }
  return result;
}


function ip(ip = '127.0.0.1') {
  return ip
    .split('.')
    .map(Number)
    .reduce((acc, byte) => (acc << 8) + byte, 0);
}


function intrspect(iface) {
  return Object.keys(iface).map(key => {
    const value = iface[key];
    if (typeof value === 'function') {
      return [key, value.length];
    }
    return [key, null];
  });
}




const characters = 'abcdefgjhiklmnopqrstwuvxyz0123456789';
const key = genKey(16, characters);
console.log('Generated key:', key);


const testIps = ['127.0.0.1', '10.0.0.1', '192.168.0.1', '8.8.8.8', '0.0.0.0'];
testIps.forEach(ip => {
  console.log(`${ip} => ${ip(ip)}`);
});


const iface = {
  foo: () => {},
  bar: (a) => {},
  baz: (a, b, c) => {},
  prop: 123
};
console.log(intrspect(iface));
