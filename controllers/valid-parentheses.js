/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0 || /[^()\[\]{}]/g.test(s)) return false;
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    let isStrValid = true;
    let closeBracketsQueue = [];
    for (let i = 0; i < s.length; i++) {
        let closeBracket = brackets[s[i]];
        if (closeBracket) {
            closeBracketsQueue.push(brackets[s[i]]);
            continue;
        }
        if (s[i] !== closeBracketsQueue[closeBracketsQueue.length - 1]) {
            isStrValid = false;
            break;
        }
        closeBracketsQueue.pop();
    }
    if (closeBracketsQueue.length !== 0) isStrValid = false;
    return isStrValid;
    
};

module.exports = isValid;
