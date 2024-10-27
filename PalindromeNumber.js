/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number = x.toString().split('');
    console.log(number.reverse());
    let rNumber = [...number].reverse();
    if(number.join('') === rNumber.join('')) {
        return true;
    } else {
        return false;
    }
};