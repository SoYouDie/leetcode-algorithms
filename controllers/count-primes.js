/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const primeNumbers = [];
    for (let i = 2; i < n; i++) {
        let isPrime = true;
        for (let j = 0; j < primeNumbers.length; j++) {
            if (i % primeNumbers[j] === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primeNumbers.push(i);
    }
    return primeNumbers.length;
};

module.exports = countPrimes;
