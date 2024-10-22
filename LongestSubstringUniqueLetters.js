/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let newString = new Set(...[s.split('')]);
    for(let i = 1; i < s.length; i++) {
        if(newString.has(s[i]) && !newString.has(s[i-1])) {
            console.log('Came here for', s[i]);
            newString.delete(s[i]); 
        }
    }
    console.log(newString);
    return newString.size;
};

console.log(lengthOfLongestSubstring("pwwkew"));