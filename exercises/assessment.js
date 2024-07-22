const names = [ "Jerry", "Adam" ]
const person = { firstName: "Robert", lastName: "Jones", age: 37 }

//Expected Output: [ "Jerry", "Adam", "Robert"]

names.push(person.firstName);
console.log(names);

