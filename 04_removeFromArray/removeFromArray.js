const removeFromArray = function(array, ...args) {

    for (const arg of args) {

        let argIndex = array.indexOf(arg);

        if (argIndex < 0) continue;
        array.splice(argIndex, 1);
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
