const isValid = require('../controllers/valid-parentheses');

const str1 = '()';
const str2 = '()[]{}';
const str3 = '(]';
const str4 = '([)]';
const str5 = '{[]}';

console.log(isValid(str1));
console.log(isValid(str2));
console.log(isValid(str3));
console.log(isValid(str4));
console.log(isValid(str5));
