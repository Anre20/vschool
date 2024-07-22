// # **Preliminaries**

// 1. Write a for loop that prints to the console the numbers 0 through 9.
// for (let i = 0; i < 10; i++) {
// console.log(i);
// }
// 2. Write a for loop that prints to the console 9 through 0.
// for (let i = 9; i >= 0; i--) {
//     console.log(i);
//     }
// 3. Write a for loop that prints these fruits to the console.`**const fruit = ["banana", "orange", "apple", "kiwi"]**`
// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }
// ---

// # **Bronze Medal**

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// let numbersArray = [];
// for (let i = 0; i < 10; i++) {
//     numbersArray.push(i);
// }
// console.log(numbersArray);

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0)
//     console.log(i);
// }
// 3. Write a for loop that will push every other fruit to an array.
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// let everyOtherFruit = [];
// for (let i = 0; i < fruit.length; i += 2) {
//     everyOtherFruit.push(fruit[i]);
// }
// console.log(everyOtherFruit);
// # **Silver Medal**


const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

// 1. Write a loop that will print out all the names of the people of the people array
// for (let i = 0; i <= peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
// }
// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
// let namesArray = [];
// let occupationsArray = [];
// for (let i = 0; i < peopleArray.length; i++) {
//     namesArray.push(peopleArray[i].name);
//     occupationsArray.push(peopleArray[i].occupation);
// }
// console.log(namesArray);
// console.log(occupationsArray);
// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".
// let namesArray = [];
// let occupationsArray = [];
// for (let i = 0; i < peopleArray.length; i += 2) {
//     namesArray.push(peopleArray[i].name);
// }
// console.log(namesArray);

// for (let i = 1; i < peopleArray.length; i += 2) {
//     occupationsArray.push(peopleArray[i].occupation);
// }
// console.log(occupationsArray);
const grid = [];

//Create an array that mimics a grid like the following using nested for loops
for (let i = 0; i < 3; i++) {
    const row = [];

    for (let j = 0; j < 3; j++) {
        row.push(0);
    }

    grid.push(row);
}

console.log(grid);
