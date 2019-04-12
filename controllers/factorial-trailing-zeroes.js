/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let amountOfZeros = 0;
    for (let i = 5; i <= n; i += 5) {
        if (Number.isInteger(Math.log10(i))) {
            amountOfZeros += Math.log10(i);
            continue;
        }
        amountOfZeros++;
    }
    return amountOfZeros;
};

module.exports = trailingZeroes;
