/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    while (n > 1) {
        n /= 2;
        if (!Number.isInteger(n)) return false;
    }
    return true;
};

module.exports = isPowerOfTwo;
