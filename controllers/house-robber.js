/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let startResult = 0;
    let endResult = 0;
    let lastIndex = nums.length;
    for (let i = 0, j = lastIndex - 1; i < nums.length; i += 2, j -= 2) {
        if (
            i + 1 < lastIndex &&
            (
                i + 3 < lastIndex && nums[i + 1] + nums[i + 3] > nums[i] + nums[i + 2] ||
                i + 2 < lastIndex && nums[i + 1] >= nums[i] + nums[i + 2] ||
                i + 2 >= lastIndex && nums[i + 1] >= nums[i]
            )
         ) {
            startResult += nums[i + 1];
            i++;
        } else {
            startResult += nums[i];
        }
        if (
            j - 1 > 0 &&
            (
                i + 3 >= 0 && nums[i - 1] + nums[i - 3] > nums[i] + nums[i - 2] ||
                j - 2 >= 0 && nums[j - 1] >= nums[j] + nums[j - 2] ||
                j - 2 < 0 && nums[j - 1] >= nums[j]
            )
         ) {
            endResult += nums[j - 1];
            j--;
        } else {
            endResult += nums[j];
        }
    }
    return endResult > startResult ? endResult : startResult;
};

module.exports = rob;
