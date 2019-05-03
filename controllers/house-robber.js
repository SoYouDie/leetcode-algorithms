/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {    
    return nums.reduce(function(sumArr, value) {
        return [sumArr[1], Math.max(sumArr[0] + value, sumArr[1])]; 
    }, [0,0])[1];
};

module.exports = rob;
