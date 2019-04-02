/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) return 0;
    let index = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let tmpStr = haystack.slice(i, i + needle.length);
            if (tmpStr === needle) {
                index = i;
                break;
            }
        }
    }
    return index;
};

module.exports = strStr;
