/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    function removeEl(index) {
        for (let i = index; i < nums.length; i++) {
            if (nums[i-1] !== undefined && nums[i -1] === nums[i]) {
                nums.splice(i, 1);
                return removeEl(i);
            }
        }
    }
    removeEl(0);
    return nums.length;
};

module.exports = removeDuplicates;
