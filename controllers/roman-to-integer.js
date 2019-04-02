/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romMap = {
        'I': {
            value: 1,
            parents: ['V', 'X'],
        },
        'V': {
            value: 5,
            parents: [],
        },
        'X': {
            value: 10,
            parents: ['L', 'C'],
        },
        'L': {
            value: 50,
            parents: [],
        },
        'C': {
            value: 100,
            parents: ['D', 'M'],
        },
        'D': {
            value: 500,
            parents: [],
        },
        'M': {
            value: 1000,
            parents: [],
        },
    };

    let intValue = 0;
    for (let i in s) {
        let intDigit = romMap[s[i]].value;
        if (s[+i + 1] && romMap[s[i]].parents.includes(s[+i + 1])) {
            intDigit = -intDigit;
        }
        intValue += intDigit;
    }
    return intValue;
};

module.exports = romanToInt;
