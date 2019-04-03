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
        let firstVal = a[i] ? +a[i] : 0;
        let secondVal = b[i] ? +b[i] : 0;
        if (firstVal + secondVal + additionalValue > 1) {
            sum = 0 + sum;
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
