function ages(persons) {
    const LifeList = {};
    for (const personName in persons) {
        if (Object.hasOwnProperty.call(persons, personName)) {
            const person = persons[personName];
          
            LifeList[personName] = person.dead - person.borned;
        }
    }
    return LifeList;
}

const persons = {
    lenin: { borned: 1870, dead: 1924 },
    mao: { borned: 1893, dead: 1976 },
    gandhi: { borned: 1869, dead: 1948 },
    hirohito: { borned: 1901, dead: 1989 },
};

console.log(ages(persons));
