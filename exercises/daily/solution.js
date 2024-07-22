// //      const reverseArray = (arr) => {
// //         for (let i = 0; i < Math.floor(arr.length / 2); i++) {
// //             const temp = arr[i];
// //             arr[i] = arr[arr.length - 1 - i];
// //             arr[arr.length - 1 - i] = temp;
// //         }
// //         return arr;
// //     }

// // console.log(reverseArray([1, 2, 3, 4, 5])); // Expected output: [5, 4, 3, 2, 1]
// // console.log(reverseArray(["apple", "banana", "orange"])); // Expected output: ["orange", "banana", "apple"]
// // console.log(reverseArray([true, false, true])); // Expected output: [true, false, true]

// // const findLongestWord = (str) => {
// //     const words = str.split(' '); // Split by space to get words
// //     let longestWord = '';
// //     for (let i = 0; i < words.length; i++) {
// //         if (words[i].length > longestWord.length) {
// //             longestWord = words[i];
// //         }
// //     }
// //     return longestWord;
// // }

// // console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// function mergeSortedArrays(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0; // Index for arr1
//     let j = 0; // Index for arr2

//     // Loop until one of the arrays is exhausted
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     // If there are remaining elements in arr1, append them
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     // If there are remaining elements in arr2, append them
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray;
// }

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Expected output: [1, 2, 3, 4, 5, 6]
// console.log(mergeSortedArrays([10, 20, 30], [5, 15, 25])); // Expected output: [5, 10, 15, 20, 25, 30]


function checkNumber(num) {
    if (num > 0) {
    return "positive";
} else if  (num === 0) {
    return "zero";
 } else {
     return "negative";
 }}

  console.log(checkNumber(5)); // Output: "positive"
  console.log(checkNumber(-10)); // Output: "negative"
  console.log(checkNumber(0)); // Output: "zero"
