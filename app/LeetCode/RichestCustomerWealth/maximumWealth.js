// 1672. Richest Customer Wealth

/*
Q. You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let result;
  result = accounts.map((e) => {
    let items = e.reduce((total, item) => total + item, 0);
    return items;
  });
  return Math.max(...new Set(result));
};
