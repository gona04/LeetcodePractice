/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
    if(word1.length == 0 && word2.length == 0) {
        return '';
    }
    let a;
    if(word1[0] == undefined) {
        a = '' + word2[0]
    } else if(word2[0] == undefined) {
        a = word1[0] + '';
    } else {
        a = word1[0] + word2[0];
    }
    // console.log(word1[0] + word2[0]);
    
   return a + mergeAlternately(word1.slice(1), word2.slice(1));
};

console.log(mergeAlternately('abc', 'xyz123'))

//axbycz