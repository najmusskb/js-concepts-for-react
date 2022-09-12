// Array methods map filter find forEach


//1.map ----------------map return dey --------------------array of object
const products = [
    { name: 'Laptop', price: 2200, brand: 'lenovo', color: 'yellow' },
    { name: 'Laptop', price: 4206, brand: 'iPhone', color: 'dark' },
    { name: 'Laptop', price: 32530, brand: 'redmi', color: 'blue' },
    { name: 'Laptop', price: 12000, brand: 'nokia', color: 'silver' },
    { name: 'Laptop', price: 5200, brand: 'sawmi', color: 'purple' },
    { name: 'Laptop', price: 42000, brand: 'realmi', color: 'black' },
    { name: 'Laptop', price: 32000, brand: 'mi', color: 'magenda' },
    { name: 'Laptop', price: 42200, brand: 'htc', color: 'blue' },
    { name: 'Laptop', price: 7200, brand: 'samsung', color: 'orange' },
    { name: 'Laptop', price: 3500, brand: '1+', color: 'red' }

]

//brand er nam gula ami arekta array te rakhte cai seitai korbo using arrow function 

const brands = products.map(Product => Product.brand);
// console.log(brands);
const prices = products.map(productPrice => productPrice.price);
// console.log(prices);

const colors = products.map(productColor => productColor.color);
// console.log(colors);






// 2. forEach //return hobe na  ------------------foreach return dey na ----------------------------------------------

//tamplate 

//Example =
products.forEach(product => {

    // console.log(product.color);
    // console.log(product.price);
    // console.log(product.name);

});









// 3. filter--------filter return dey----------------------------------------
//tomake ekta sorto dibe seita tomake fulfill korte hobe eitai filter er kag ...........
const cheap = products.filter(product => product.price < 5000);
// console.log(cheap);



// Enouther Example  with includes();
const findName = products.filter(names => names.brand.includes('n'));
console.log(findName);











// 04.find-------------------------------------------------------------------------
const special = products.find(names => names.brand.includes('n'));
console.log(special)