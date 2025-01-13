// function summation(nums) {
//     let sum = 0;
//     for (let num of nums) {
//         sum += num;
//     }
//     return sum;
// }

let numbersToSum = [4, 1, 5, 123, 45, 1, 34, 23];
// let numbers = summation(numbersToSum);
const numbers = numbersToSum.reduce((accumulator, current) => accumulator + current, 0);
console.log(numbers);