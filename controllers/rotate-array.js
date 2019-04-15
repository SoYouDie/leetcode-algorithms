/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for (let i = nums.length - 1; i >= nums.length - k; i--) {
        nums.unshift(nums.pop(nums[i]));
    }
};

module.exports = rotate;
