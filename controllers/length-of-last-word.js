/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s) return 0;
    let lastLength = 0;
    let wordsArr = s.split(' ');
    while (wordsArr.length) {
        let lastWord = wordsArr.pop();
        if (lastWord) {
            lastLength = lastWord.length;
            break;
        }
    }
    return lastLength;
};

module.exports = lengthOfLastWord;
