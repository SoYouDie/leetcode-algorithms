/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let commonPrefix;
    strs.forEach((word) => {
        if (commonPrefix === undefined) commonPrefix = word;
        for (let i in commonPrefix) {
            if (commonPrefix[i] !== word[i]) {
                commonPrefix = commonPrefix.slice(0, i);
                break;
            }
        }
    });
    return commonPrefix;
};

module.exports = longestCommonPrefix;
