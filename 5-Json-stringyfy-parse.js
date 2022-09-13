// 1.JSON
const student = {
    name: 'sakib',
    age: 25,
    id: 173002057,
    Department: 'CSE',
    University: 'Green University Of Bangladesh',
    movie: ['king khan', 'dhakar mastan', 'din the day'],
};

const studentJson = JSON.stringify(student);
// console.log(studentJson);

// jason file ke object korte hole ja korte hobe(normal java script) 
const studentObj = JSON.parse(studentJson);
console.log(studentObj)