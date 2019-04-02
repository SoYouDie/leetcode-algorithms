const romanToInt = require('../controllers/roman-to-integer');

const num3 = 'III';
const num4 = 'IV';
const num9 = 'IX';
const num58 = 'LVIII';
const num1994 = 'MCMXCIV';

console.log(romanToInt(num3));
console.log(romanToInt(num4));
console.log(romanToInt(num9));
console.log(romanToInt(num58));
console.log(romanToInt(num1994));
