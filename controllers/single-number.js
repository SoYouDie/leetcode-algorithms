/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((prev,curr) => curr^prev );
};

module.exports = singleNumber;
