/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let amountOfZeros = 0;
    while (n > 4) {
        n = Math.floor(n / 5);
        amountOfZeros += n;
    }
    return amountOfZeros;
};

module.exports = trailingZeroes;
