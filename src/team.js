import Character from './character.js';

class Team {
  constructor(persons) {
    this.persons = persons;
    this[Symbol.iterator] = function () {
      let current;
      const last = this.persons.length;
      const persons = this.persons;
      let i = 0;

      return {
        next() {
            if (i < last) {
            current = persons[i];
            i++;
            return {
              done: false,
              value: current,
            };
          }
          return {
            done: true,
          };
        },
      };
    };
  }
}

const persons = [];
persons.push(new Character('Joe', 'Swordsman'));
persons.push(new Character('Sam', 'Magician'));
const team = new Team(persons);

for (const person of team) {
  console.log(person);
}
