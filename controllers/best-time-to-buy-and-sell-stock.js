/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let priceToBuy = priceToSell = 0;
    let dayToSell = 0;
    prices.forEach((price, index) => {
        if (!priceToBuy || price < priceToBuy) {
            priceToBuy = priceToSell = price;
            dayToBuy = index;
        }
        if (price > priceToSell && index) {
            priceToSell = price;
        }
    });
    return priceToSell - priceToBuy > 0 ? priceToSell - priceToBuy : 0;
};

module.exports = maxProfit;
