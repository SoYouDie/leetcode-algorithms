/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    prices.forEach((price, index) => {
        for (let i = index; i < prices.length; i++) {
            let priceDiff = prices[i] - price;
            if (priceDiff > profit) profit = priceDiff;
        }
    });
    return profit;
};

module.exports = maxProfit;
