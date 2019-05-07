/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (let i = nums.length - 1; i > 0; i--) {
        if (Math.abs(nums.indexOf(nums[i]) - i) === k ||
            Math.abs(nums.reverse().indexOf(nums[i]) - i) === k) return true;
    }
    return false;
};

module.exports = containsNearbyDuplicate;
