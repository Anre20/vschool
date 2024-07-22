var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
fruit.pop()
// console.log(fruit)
// 2. Remove the first item from the fruit array.
fruit.shift()
// console.log(fruit)
// 3. Find the index of "orange."
let indexOfOrange = fruit.indexOf("orange")
// console.log(indexOfOrange)
// 4. Add that number to the end of the fruit array.
fruit.push("2")
// console.log(fruit)
// 5. Use the length property to find the length of the vegetable array.
lengthOfVegetables = vegetables.length
// console.log(lengthOfVegetables)
// 6. Add that number to the end of the vegetable array.
vegetables.push("4")
// console.log(vegetables)
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
const food = fruit.concat(vegetables)
// console.log(food)
// 8. Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)
// console.log(food)
// 9. Reverse your array.
const reversedFood = food.reverse()
// console.log(reversedFood)
// 10. Turn the array into a string and return it.
let foodString = food.toString()
console.log(foodString)
