/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let timesRepeated = 0;
    for(let i = (nums.length - 1); i > 0 ;i--) {
        if(nums[i] == nums[i-1]) {
            timesRepeated++;
            nums.splice(i, 1);
        }
    }
    console.log(nums)
};