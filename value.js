const person = {
  name: 'Kalam',
  age: 25,
  profession: 'wevDev',
  salary: 3000,
  married: true,
};
console.log(person.age);
const bonus = (person.salary = 35000);
console.log(bonus);
const propName = 'profession';
person[propName] = 'hacker';
console.log(person);
