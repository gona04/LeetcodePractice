/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowelsList = [];
    const vowels = new Set(["a", "e", "i", "o", "u", "A", 'E', 'I', 'O', 'U']);
    for(let i = 0; i < s.length; i++) {
     if(vowels.has(s[i])) {
         vowelsList.push({value: s[i], index: i});
     }
    }
 
    console.log(vowelsList)
 };

 reverseVowels('IceCreAm');