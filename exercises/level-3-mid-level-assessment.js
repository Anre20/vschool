// ### Challenge 1: S**ort Array with Preserved Index for -1 Values**

// You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.

const solution = (arr) => {
    const nonNegativeOnes = arr.filter(num => num !== -1).sort((a, b) => a - b);

    let result = [];
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            result.push(-1);
        } else {
            result.push(nonNegativeOnes[index]);
            index++;
        }
    }

    return result;
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(solution([5, 3, 1]));
console.log(solution([-1, -1, -1, -1]));
console.log(solution([100, -1, 50, -1, 75]));


// ### Challenge 2: **Count Vowels**

// Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

// Implement the **`countVowels`** function using either the provided example solutions or your own solution.

const countVowels = (string) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;

};

console.log(countVowels("Counting Vowels"));


console.log(countVowels("Hello World"));

// Write a JavaScript function called **`findSumOfTwo`** that takes
//in an array of numbers and a target number. The function should find
//two numbers in the array that add up to the target number and return
//them as an array. If there are multiple pairs that satisfy the condition,
//return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provide
// example solutions or your own solution.

function findSumOfTwo(numbers, target) {
    for (let i = 0; i < numbers.length ; i++) {
        for (let j = i + 1; j < numbers.length ; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [numbers[i], numbers[j]];
            }
        }
    }

}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]
