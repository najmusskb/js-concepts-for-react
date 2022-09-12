// 1.tamplate string ------------------------------------------------------------
const number = [1, 54, 874, 65, 81, 685, 4154121, 54, 1548, 1547, 8545241, 1, 58]
const student = {
    name: 'sakib',
    age: 25,
    id: 173002057,
    Department: 'CSE',
    University: 'Green University Of Bangladesh',
    movie: ['king khan', 'dhakar mastan', 'din the day'],
};
const about = `My Name Is : ${student.name}
age of ${student.age}
has Number position is ${number[4]}
Also Liked Movies ${student.movie[0]}
`;
console.log(about);
















// 2.Arrow Function  ------------------------------------------------------------

//***  simple arrow function declare
const getFiftyFive = () => 55;
// single arrow function with parameter
const addSistyfive = num => num + 65;
const isEven = x => x % 2 === 0;
// two ++  parameters arrow function 
const addThree = (num1, num2, num3) => num1 + num2 + num3;



//multiline Arrow function 
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}









// 3.spread Operator (...) ekta array ke notun ekta array banao  ----------
const ArrayNumber = [1, 54, 874, 65, 81, 54, 1548, 1547, 8545241, 1, 58];
console.log(ArrayNumber)
const newNumbers = [...ArrayNumber]
console.log(newNumbers);

//create a new array  from an older array  and add an element 
const createaNewElement = [...ArrayNumber, 33333, 888, 99]
console.log(createaNewElement);