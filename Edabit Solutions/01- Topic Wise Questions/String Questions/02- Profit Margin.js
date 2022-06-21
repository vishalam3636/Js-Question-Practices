// https://edabit.com/challenge/uqTGMSityHMYL7W5s

/*
❓❓❓❓ Profit Margin ❓❓❓❓

Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
profitMargin(50, 50) ➞ "0.0%"

profitMargin(28, 39) ➞ "28.2%"

profitMargin(33, 84) ➞ "60.7%"

📝 Notes:
Remember to return the result as a percentage formatted string.
Only one decimal should be included.
*/

// My Sol-01:
function profitMargin(costPrice, salesPrice) {
  return (((salesPrice - costPrice) / salesPrice) * 100).toFixed(1) + "%";
}

console.log(profitMargin(10, 15)); // "33.3%"
console.log(profitMargin(75, 40)); // "-87.5%"
console.log(profitMargin(55, 55)); // "0.0%"
console.log(profitMargin(30, 50)); // "40.0%"
console.log(profitMargin(9999, 10001)); // "0.0%"
console.log(profitMargin(33, 84)); // "60.7%"
console.log(profitMargin(28, 39)); // "28.2%"
