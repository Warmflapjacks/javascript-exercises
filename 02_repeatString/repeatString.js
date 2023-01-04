const repeatString = function(inputString, num) {
    if (num === 0) {
        return '';
    }

    if (num < 0) {
        return 'ERROR';
    }

    else{
    
        let concactString = inputString;

        for (let i = 1; i < num; i++) {
            concactString = concactString.concat(inputString);
        }

        return concactString;
    }
};

// Do not edit below this line
module.exports = repeatString;
