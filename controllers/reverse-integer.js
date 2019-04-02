/**
 * @param {number} x
 * @return {number}
 */
const min32Int = -2147483648;
const max32Int = 2147483647;

var reverse = function(x) {
    if (x > max32Int || x <= min32Int) return 0;
    const strInt = x.toString();
    let result = '';
    let minLen = 0;
    if (strInt[0] === '-') {
        result = '-';
        minLen = 1;
    }
    for (
        let i = strInt.length - 1;
        i >= minLen;
        i--) {
            if (!result && strInt[i] === '0') continue;
            result += strInt[i]; 
    }
    return result;
};

module.exports = reverse;
