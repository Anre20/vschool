// function capitalizeAndLowercase(str) {

//     let upperCaseStr = str.toUpperCase();

//     let lowerCaseStr = str.toLowerCase();


//     let result = upperCaseStr + lowerCaseStr;

//     return result;
// }

// let inputString = "Anre";
// let resultString = capitalizeAndLowercase(inputString);
// console.log(resultString);

// function halfLength(str) {

//     let halfLength = Math.floor(str.length / 2);
//    return halfLength
// }

// let inputString = "Philadelphia";
// let resultString = halfLength(inputString)
//  console.log(resultString);

//  function halfWord(str) {
//     let halfWord = str.slice(0, Math.floor(str.length / 2));
//     return halfWord
//  }
//     console.log(halfWord(inputString));

function capitalizeLowercase(str) {

    let halfIndex = Math.floor(str.length / 2);

    let firstHalf = str.slice(0, halfIndex);
    let secondHalf = str.slice(halfIndex);

    let capitalizedFirstHalf = firstHalf.toUpperCase();
    let lowercaseSecondHalf = secondHalf.toLowerCase();

    let result = capitalizedFirstHalf + lowercaseSecondHalf;

    return result;
}

let inputString = "HelloWorld";
let resultString = capitalizeLowercase(inputString);
console.log(resultString);
