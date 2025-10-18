// 9.1
const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' }
];

// 9.2
const users = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Seneca', phone: '+380445554400' }
];

// 9.3
function findPhoneByName(name) {
  for (const user of users) {
    if (user.name === name) {
      return user.phone;
    }
  }
  return null;
}


// 9.4
const phoneMap = new Map();
phoneMap.set('Marcus Aurelius', '+380445554433');
phoneMap.set('Seneca', '+380445554400');

// 9.5
function findPhoneByNameMap(name) {
  return phoneMap.get(name) || null;
}
