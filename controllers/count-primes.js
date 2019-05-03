/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const primeNumbers = [];
    const notPrimeEndings = [0, 2, 4, 5, 6, 8, 9]
    for (let i = 2; i < n; i++) {
        const numberStr = n.toString(); 
        if (
            numberStr[numberStr.length - 2] &&
            notPrimeEndings.includes(numberStr[numberStr.length - 1])
        ) continue;
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
