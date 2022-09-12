//42-4 Array and object Destructuring, optional chaining

//array destructure 
const numbers = [12, 36];
// destructure
const [x, y] = [12, 36]
console.log(x, y)




// distructure with function 

function boxify(num1, num2) {

    const nums = [num1, num2];
    return nums;
}
const boxyfyresult = boxify(1, 2);
console.log(boxyfyresult)


//  object distructure  
const { name, id } = { name: 'sakib', id: 17 }
