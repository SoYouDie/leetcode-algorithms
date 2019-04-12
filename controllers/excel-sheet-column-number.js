/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let excelNumber = 0;
    let power = s.length - 1;
    for (let i = 0; i < s.length; i++, power--) {
        excelNumber += 26 ** power * (s[i].charCodeAt(0) - 64);
    }
    return excelNumber;
};

module.exports = titleToNumber;
