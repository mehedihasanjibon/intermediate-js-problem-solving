/*
 Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. 
*/

const newFunction = (numbers) => {
    return (numbers.map(num=> num*num)).reduce((a , b) => 
    {return a + b}, 0) / numbers.length;
}
const numbers = [5, 7, 3, 4, 2, 6];
const display = newFunction(numbers);
console.log(display);