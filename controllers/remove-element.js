/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    while (nums[i] !== undefined) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            continue;
        }
        i++;
    }
    return nums.length;
};

module.exports = removeElement;
