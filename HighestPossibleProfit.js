/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    lowestIndex = 0;
    highestValueIndex = 1;
    maxProfitValue = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[lowestIndex] > prices[i]) {
            lowestIndex = i;
        }
    }
    console.log(lowestIndex);
    if(lowestIndex == (prices.length -1)) return 0;
    else {
        highestValueIndex = lowestIndex + 1;
        for(let i = (lowestIndex + 2); i < prices.length; i++) {
            if(prices[highestValueIndex] < prices[i]) {
                maxProfitValue = prices[i] - prices[lowestIndex];
                highestValueIndex = i;
            }
        }

       return maxProfitValue;
    }
};