const sumAll = function(num1, num2) {
    let sum = 0;
    let newNum1;
    let newNum2;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    }

    if (num1 > num2) {
        newNum2 = num1;
        newNum1 = num2;

        for (let i = newNum1; i <= newNum2; i++) {
            sum =+ (sum + i);
        }
        return sum;
    }

    else {
        for (let i = num1; i <= num2; i++) {
            sum =+ (sum + i);
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
