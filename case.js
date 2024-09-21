const school = `Uttara Model School`;
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = `Programming contest`;
const book = `programming contest`;

if (subject.toUpperCase() === book.toUpperCase()) {
    console.log('You have been hacked by me');
    
}
else {
    console.log('Hacker will hack me');
    
}

const drink = `water `;
const liquid = `  water`;
if (drink.trim() === liquid.trim()) {
    console.log('Drink water');
    
}
else {
    console.log("Don't touch my water bottle");
    
}