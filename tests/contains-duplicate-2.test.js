const containsNearbyDuplicate = require('../controllers/contains-duplicate-2');

const arr1 = [1, 2, 3, 1];
const num1 = 3;
const arr2 = [1, 0, 1, 1];
const num2 = 1;

console.log(containsNearbyDuplicate(arr1, num1));
console.log(containsNearbyDuplicate(arr2, num2));
