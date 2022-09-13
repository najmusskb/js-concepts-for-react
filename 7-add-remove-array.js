// 01..array of object add and remove

const products = [
    { name: 'laptop', price: 2200, brand: 'lenovo', color: 'yellow' },
    { name: 'phone', price: 4206, brand: 'iPhone', color: 'dark' },
    { name: 'mobile', price: 32530, brand: 'redmi', color: 'blue' },
    { name: 'watch', price: 12000, brand: 'nokia', color: 'silver' },
    { name: 'bag', price: 5200, brand: 'sawmi', color: 'purple' },
    { name: 'kata', price: 42000, brand: 'realmi', color: 'black' },
    { name: 'pen', price: 32000, brand: 'mi', color: 'magenda' },
    { name: 'Ac', price: 42200, brand: 'htc', color: 'blue' },
    { name: 'Fan', price: 7200, brand: 'samsung', color: 'orange' },
    { name: 'airplane', price: 3500, brand: '1+', color: 'red' }

];

const newProduct = { name: 'webCam', price: 7000, brand: 'red' };

// now copy old array and add a new product 
const newProducts = [...products, newProduct];
// console.log(newProducts)


// 02 create a new array without one specific items
// remove means create a new array without phone 
const reamaining = products.filter(p => p.name != 'bag');
// console.log(reamaining)





