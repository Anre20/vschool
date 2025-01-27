// function total(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(total([1, 2, 3])); // Output: 6

// function stringConcat(arr) {
//     return arr.reduce((acc, curr) => acc + curr.toString(), '');
//  }

//  console.log(stringConcat([1,2,3])); // "123"

// function totalVotes(arr) {
//     return arr.reduce((total, person) => person.voted ? total + 1 : total, 0);

//  }

//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7

// function shoppingSpree(arr) {
//     return arr.reduce((total, sum) => sum.price + total, 0);
//  }

//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];

//  console.log(shoppingSpree(wishlist)); // 227005

// function flatten(arr) {

//  }

//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];

//  	const flattenedArray = arrays.reduce((accumulator, currentValue) => {
//     	  return accumulator.concat(currentValue);
//     	}, []);


//  console.log(flattenedArray); // ["1", "2", "3", true, 4, 5, 6];


var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce((result, person) => {
        if (person.age < 26) {
            result.numYoungPeople++;
            if (person.voted) result.numYoungVotes++;
        } else if (person.age < 35) {
            result.numMidsPeople++;
            if (person.voted) result.numMidVotesPeople++;
        } else {
            result.numOldsPeople++;
            if (person.voted) result.numOldVotesPeople++;
        }
        return result;
    }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    });
}


console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
