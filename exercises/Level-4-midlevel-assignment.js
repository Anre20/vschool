function filterAnagrams(arr, target) {
    return arr.filter(word => {
        return word.split('').sort().join('') === target.split('').sort().join('');
    });
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'odg';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']


function sortByMultipleCriteria(people) {

    return people.sort((a, b) => {
        if (a.age === b.age) {
            return a.name.localeCompare(b.name);
        }
        return a.age - b.age;
    });

}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]

