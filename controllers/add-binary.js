/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = '';
    const lengthDiff = a.length - b.length;
    const biggestLenght = lengthDiff > 0 ? a.length : b.length;
    let additionalValue = 0;
    for (let i = biggestLenght - 1; i >= 0; i--) {
        let firstVal, secondVal;
        if (lengthDiff > 0) {
            firstVal = +a[i];
            secondVal = b[i - lengthDiff] ? +b[i - lengthDiff] : 0;
        } else {
            firstVal = a[i + lengthDiff] ? +a[i + lengthDiff] : 0;;
            secondVal = +b[i];
        }
        let tmpSum = firstVal + secondVal + additionalValue;
        if (tmpSum > 1) {
            sum = tmpSum === 2 ? 0 + sum : 1 + sum;
            additionalValue = 1;
            continue;
        }
        sum = firstVal + secondVal + additionalValue + sum;
        additionalValue = 0;
        continue;
    }
    return additionalValue === 1 ? additionalValue + sum : sum;
};

module.exports = addBinary;
