const person = {
    name: 'Kalam',
    age: 25,
    profession: 'wevDev',
    salary: 3000,
    married:true

}
console.log(person.salary);
const newName = person['name'];
console.log(newName);

person['age'] = 30;
console.log(person);
