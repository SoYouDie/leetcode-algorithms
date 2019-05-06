/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums.indexOf(nums[i]) !== i) return true;
    }
    return false;
};

module.exports = containsDuplicate;
