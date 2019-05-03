/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let results = [];
    let equalIndex = null;
    function countSum (number) {
        let sum = 0;
        while (number > 0) {
            let figure = number % 10;
            sum += figure**2;
            number = Math.floor(number / 10);
        }
        const firstEqual = results.indexOf(sum);
        if (firstEqual >= 0 && equalIndex === null) equalIndex = firstEqual;
        if (equalIndex === firstEqual - 1) return false;
        if (sum === 1) return true;
        results.push(sum);
        return countSum(sum);
    }
    return countSum(n);
};

module.exports = isHappy;
