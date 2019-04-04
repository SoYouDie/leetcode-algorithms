/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (nums1.length !== m + n) return;
    nums1.splice(m, n);
    nums2.forEach(num2 => {
        for (let i = 0; i < nums1.length; i++) {
            if (num2 <= nums1[i] && (nums1[i - 1] === undefined || num2 > nums1[i - 1])) {
                nums1.splice(i, 0, num2);
                break;
            }
            if (num2 > nums1[i] && nums1[i + 1] === undefined) {
                nums1.push(num2);
                break;
            }
        }
        if (nums1.length === 0) nums1.push(num2);
    });
    return;
};

module.exports = merge;
