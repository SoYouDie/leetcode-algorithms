/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    let first = 1;
    let second = 2;
    for (let i = 2; i < n; i++) {
        let tmpSecond = second;
        second += first;
        first = tmpSecond;
    }
    return second;
};

module.exports = climbStairs;
