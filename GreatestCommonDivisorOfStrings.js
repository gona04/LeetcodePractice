/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  const gcdLength = gcd(str1.length, str2.length);
  const pattern = str1.substring(0, gcdLength);

  if (pattern.repeat(str1.length / gcdLength) === str1 &&
      pattern.repeat(str2.length / gcdLength) === str2) {
      return pattern;
  } else {
      return '';
  }
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("ABC","ABCABC"));
console.log(gcdOfStrings("ABCDEF", "ABC"));