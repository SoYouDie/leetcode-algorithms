/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const indexes = [];
    numbers.forEach((number, index) => {
        let i = index + 1;
        while (number + numbers[i] < target) {
            i++;
        }
        if (number + numbers[i] === target) indexes.push(index + 1, i + 1); 
    });
    return indexes;
};

module.exports = twoSum;
