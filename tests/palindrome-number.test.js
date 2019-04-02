const isPalindrome = require('../controllers/palindrome-number');

const palNumber = 121;
const negPalNumber = -121;
const nonePalNumber = 1;

console.log(isPalindrome(palNumber));
console.log(isPalindrome(negPalNumber));
console.log(isPalindrome(nonePalNumber));
