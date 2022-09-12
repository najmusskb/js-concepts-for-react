// 1.how to declare a variable using let and const (var variable bad eita pora lagbe na )


const baperNam = 'borhun uddin';
let session = 'reainning';
session = 'summer';


// --------------------------------------------------------------------------------------------


// 2.how to make a condition
// 6 basic conditio like (>, < , >=,<=,== , ===,!=,!==)
// multiple condition Use (&& , ||)


// --------------------------------------------------------------------------------------------


// 3.Array
// indexOf
// length
// push
// pop

const number = [1, 54, 874, 65, 81, 685, 4154121, 54, 1548, 1547, 8545241, 1, 58]

// console.log(number.length);
number[0] = 65;
// console.log(number)





// --------------------------------------------------------------------------------------------
// 04. Loop
// For loop

for (let i = 0; i < number.length; i++) {
    const numbers = number[i];
    // console.log(numbers)
}





// --------------------------------------------------------------------------------------------
// 5.function 
function multiple(num1, num2) {

    const multipleResult = num1 * num2;
    return multipleResult;
}
const firstnum = 5;
const secondnum = 6;
const result = multiple(firstnum, secondnum);
// console.log(result);






// --------------------------------------------------------------------------------------------
// 6.how to make a object


const studet = {
    name: 'sakib',
    age: 25,
    id: 173002057,
    Department: 'CSE',
    University: 'Green University Of Bangladesh',
    movie: ['king khan', 'dhakar mastan', 'din the day'],


};
// console.log(studet);



// 3 ways to  access property by name

// number---1
// console.log(studet.name) //direct by property


// number---2
console.log(studet['age']); //access via property 




// number---3
const MyVariable = 'age';
console.log(studet[MyVariable]);
