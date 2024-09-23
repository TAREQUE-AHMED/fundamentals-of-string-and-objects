const college = {
    name: 'UMC',
    class: ['11', '12'],
    events: ['science fair', '16 december', '21 february'],
    unique: {
        color: 'blue',
        result: 5,
        merit:'top'
    }
}
const value = college.name;
college['unique'].merit = 'top most';
delete college.class
console.log(college);

console.log(college.unique.merit);
