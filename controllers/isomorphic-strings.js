/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    let firstWord = [];
    let secondWord = [];
    for (let i = 0; i < s.length; i++) {
        if (!secondWord.includes(t[i])) secondWord.push(t[i]);
        if (!firstWord.includes(s[i])) firstWord.push(s[i]);
        if (firstWord.indexOf(s[i]) !== secondWord.indexOf(t[i])) return false;
    }
    return true;
};

module.exports = isIsomorphic;
