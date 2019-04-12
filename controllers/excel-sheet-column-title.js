/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let excelTitle = '';
    while (n > 0) {
        const remainder = n % 26 === 0 ? 26 : n % 26;
        excelTitle = String.fromCharCode(64 + remainder) + excelTitle;
        n = (n - remainder) / 26;
    }
    return excelTitle;
};

module.exports = convertToTitle;
