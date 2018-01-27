const integers = [1, 2, 3]; //map
// const updatedIntegers = integers.map(function (number) { //number - is a current number in an array;
//     return number += 1;
// });
// const updatedIntegers = integers.map(() => 'bob'); //number - is a current number in an array; => -is a fat array
// console.log(updatedIntegers);

const ages = [23, 42, 6, 18];
const adults = ages.filter((age) => age > 20); //returns true or false;
console.log(adults);