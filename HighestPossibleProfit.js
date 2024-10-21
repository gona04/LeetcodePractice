/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0; 

    let lowestIndex = 0;
    let maxProfitValue = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[lowestIndex]) {
            lowestIndex = i;
        } else {
            let potentialProfit = prices[i] - prices[lowestIndex];
            if (potentialProfit > maxProfitValue) {
                maxProfitValue = potentialProfit;
            }
        }
    }

    return maxProfitValue;
};

// Example usage:
console.log(maxProfit([1, 2])); // Output: 1
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0