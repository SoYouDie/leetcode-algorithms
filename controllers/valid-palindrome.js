/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let middle = Math.round(s.length / 2);
    let i = 0, j = s.length - 1;
    while (i < middle) {
        if (!/([a-zA-Z0-9])/.test(s[i])) {
            i++;
            continue;
        }
        if (!/([a-zA-Z0-9])/.test(s[j])) {
            j--;
            continue;
        }
        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i++;
        j--;
    }
    return true;
};

module.exports = isPalindrome;
