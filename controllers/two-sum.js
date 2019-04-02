/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    nums.forEach((num, index) => {
        for (let i = index + 1; i < nums.length; i++) {
            if (num + nums[i] === target) {
                result.push(index, i);
            }
        }
    });
    return result;
};

module.exports = twoSum;
