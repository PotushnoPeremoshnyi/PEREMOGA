const obj1 = { name: 'Marcus' };

let obj2 = { name: 'Aurelius' };

obj2.name = null;

obj2.name = undefined;

function UserProfCreateion(name, city) {
  return { name, city };
}