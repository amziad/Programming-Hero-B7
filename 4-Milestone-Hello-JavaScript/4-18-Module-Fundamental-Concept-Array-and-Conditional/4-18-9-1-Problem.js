// You are given an array

/**
 * Find the index of 'Banana' and replace 'Banana' with 'Mango'
 * Remove 'Orange' and add 'Watermalon'
 **/

var fruits = ['Apple', 'Banana', 'Orange']; 
console.log("Fruits array", fruits);


// Find the index of 'Banana'

var indexOfBanana = fruits.indexOf('Banana');
console.log('Index of Banana: ',indexOfBanana);

// Replace 'Banana' with 'Mango'
fruits[indexOfBanana] = 'Mango';
console.log("Fruits array after Replacing 'Banana' with 'Mango'", fruits);

// Remove 'Orange'
fruits.pop();
console.log("Fruits array after popping 'Orange'", fruits);

// Add 'Watermalon'
fruits.push('Watermelon');
console.log("Fruits array after pushing 'Watermalon'", fruits);