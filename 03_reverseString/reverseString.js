const reverseString = function(userInput) {
    let stringToArray = [];
    let reverseArray;
    let arrayToString;

    for (let i = 0; i < userInput.length; i++) {
        stringToArray.push(userInput[i]);
    }

    reverseArray = stringToArray.reverse();

    arrayToString = reverseArray.join("");
    
    return arrayToString;

};

// Do not edit below this line
module.exports = reverseString;
