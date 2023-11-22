const sumAll = function(a, b) {

    let sum = 0;
    let biggerNum;
    let smallerNum;

    if (a < 0 || b < 0 || typeof(a) !== 'number' || typeof(b) !== 'number') {
        return 'ERROR';
    } 
    if (a > b) {
        biggerNum = a;
        smallerNum = b;
    } else {
        biggerNum = b;
        smallerNum = a;
    }
    for (let i = smallerNum; i <=biggerNum; i++) {
        sum +=i;
    }
     return sum;
}; 

// Do not edit below this line
module.exports = sumAll;
