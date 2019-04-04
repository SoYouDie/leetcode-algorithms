/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 0) return false;
    let result = 0;
    for (let i = 1; i <= x; i++) {
        let divNum = x / i;
        if (i === Math.floor(divNum) || i > divNum) {
            result = Math.floor(divNum);
            break;
        }
    }
    return result;
};

module.exports = mySqrt;
