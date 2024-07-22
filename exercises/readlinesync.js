const readline = require("readline-sync");

const num1 = parseInt(readline.question('Please give me the first number: '));
console.log(num1);

const num2 = parseInt(readline.question('Please give me the second number: '));
console.log(num2);

const operation = readline.question('Please give me the operation that you would like to perform: ');

if (operation === "add") {
    const result = num1 + num2;
    console.log(`The result of the addition is: ${result}`);
} else if (operation === "sub") {
        const result = num1 - num2;
        console.log(`The result of the addition is: ${result}`);
} else if (operation === "mul") {
        const result = num1 * num2;
        console.log(`The result of the addition is: ${result}`);
} else if (operation === "div") {
        const result = num1 / num2;
        console.log(`The result of the addition is: ${result}`);
} else {
    console.log('Please enter a valid operation');
}
