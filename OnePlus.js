/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const number = digits.join("").toString();
    const numInt = parseInt(number) + 1;
    return numInt.toString().split("").map(Number);
};