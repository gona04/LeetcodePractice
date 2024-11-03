/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    while(nums.indexOf(val) !== -1)  {
        const a = nums.indexOf(val);
        nums.splice(a, 1);
    }

    return nums.length
};