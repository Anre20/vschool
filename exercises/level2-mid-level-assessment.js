// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function onlyEven(arr) {
    const evenNumbers = arr.filter(function(a) {
        if (a % 2 === 0)
             return true
        else false
    })
    return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6]
console.log(onlyEven(numbers));
// function sortNumbers(arr) {
//     const sorted = arr.sort(function(a, b) {
//         return -1;
//     });
//     // console.log(sorted === arr);
//     // console.log(arr);
//     return arr
// }

//     // Example usage:
// const numbers = [4, 2, 7, 1, -9, 5];
// const sortedNumbers = sortNumbers(numbers);
// console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]
// // console.log(numbers)

// console.log(["apples", "oranges", "grapes"] === ["apples", "oranges", "grapes", "bananas"]);


// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.

function convertToUppercase(strings) {
    return strings.map(word => {
                return word.toUpperCase();
    });
}

    // Example usage:
const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']
