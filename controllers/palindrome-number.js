/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let numLength = x > 1 ? 1 : 0;
    let lenX = x;
    while (lenX / 10 >= 1) {
        lenX /= 10;
        ++numLength;
    }
    let lowerIndex, higherIndex, higherVal, lowerVal; 
    if (numLength % 2 !== 0) {
        higherIndex = Math.floor(numLength / 2) + 1;
        higherVal = Math.floor(x / Math.pow(10, higherIndex));
        lowerIndex = higherIndex - 1;
        lowerVal = x % Math.pow(10, lowerIndex);
    } else {
        lowerIndex = numLength / 2;
        higherVal = Math.floor(x / Math.pow(10, lowerIndex));
        lowerVal = x % Math.pow(10, lowerIndex);
    }
    let isNumberPalindrome = true;
    let higherCounter = 1;
    let lowerCounter = lowerIndex - 1;
    while (lowerCounter >= 0) {
        let higherDigit = higherVal % Math.pow(10, higherCounter);
        let lowerDigit = Math.floor(lowerVal / Math.pow(10, lowerCounter));
        if (higherDigit !== lowerDigit) {
            isNumberPalindrome = false;
            break;
        }
        higherVal = Math.floor(higherVal / Math.pow(10, higherCounter)); 
        lowerVal = lowerVal % Math.pow(10, lowerCounter);
        lowerCounter--;
    }
    return isNumberPalindrome;
};

module.exports = isPalindrome;
