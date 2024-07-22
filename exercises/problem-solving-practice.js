//Write a function that takes an array of numbers and returns the largest (without using Math.max())

// const findLargestNumber = (arr) => {
//     if (arr.length === 0) {
//         return undefined;
//     }

//     let largest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// console.log(findLargestNumber([6, 13, 250, 3]))

// Write a function that takes an array of words and a character and returns each word that has that character present.

// const lettersWithStrings = (arr, char) => {
//     return arr.filter(word => word.includes(char));
// }

// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"))

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
const isDivisible = (num1, num2) => {
    if (num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }

}

console.log(isDivisible(15, 4))
