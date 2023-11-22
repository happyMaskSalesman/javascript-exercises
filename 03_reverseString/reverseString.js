const reverseString = function(word) {

    let wordReversed = '';

    for (i = 1; i <= word.length; i++) {
        wordReversed += word.substr(-i, 1);
    }
    return wordReversed;
};

// Do not edit below this line
module.exports = reverseString;
