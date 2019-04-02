const removeElement = require('../controllers/remove-element');

const arr1 = [3, 2, 2, 3];
const val1 = 3;
const arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;

console.log(removeElement(arr1, val1));
console.log(removeElement(arr2, val2));
