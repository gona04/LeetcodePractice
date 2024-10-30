/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    let romanMap = new Map()
    .set('M', 1000)
    .set('D', 500)
    .set('C', 100)
    .set('L', 50)
    .set('X', 10)
    .set('V', 5)
    .set('I', 1);
   for(let i = 0; i < s.length; i++) {
    let currentVal = romanMap.get(s[i]);
    let nextVal = romanMap.get(s[i+1])

    if(nextVal && currentVal < nextVal) {
        total -= currentVal;
    } else {
        total += currentVal;
    }
   }
   return total;
};

console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('LVIII'));