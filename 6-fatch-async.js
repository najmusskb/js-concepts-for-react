//1. fetch('url')-----------------------------------------------
//     .then(res => res.json())
//     .then(data => console.log(data))




const student = {
    name: 'sakib',
    age: 25,
    id: 173002057,
    Department: 'CSE',
    University: 'Green University Of Bangladesh',
    movie: ['king khan', 'dhakar mastan', 'din the day'],
};


//2.------------------------------------- keys , values
//sudhu key er nam gulo pabe 
const key = Object.keys(student)
// console.log(key)

//3.----------------------------------object er value gula pabe 
const values = Object.values(student)
// console.log(values);




//4.--------------------------- array of object thakle amra forEach calabo 
const number = [1, 54, 874, 65, 81, 685, 4154121, 54, 1548, 1547, 8545241, 1, 58]
number.forEach(obj => {
    // console.log(obj);

});


//05-------------- zodi amader kono kichu return pawar dorkar hoy tahole amra map calabo 

const MapNumber = [1, 54, 874, 65, 81, 54, 1548, 1547, 8545241, 1, 58];
MapNumber.Map(pd => pd * 2)

// 06---------------------------------for of on  array like object
// 06---------------------------------for in using on object property 



