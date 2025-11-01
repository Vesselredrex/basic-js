const { NotImplementedError } = require("../lib");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 */
function countCats(matrix) {
  let count = 0;

  // проходимо по кожному рядку
  for (let row of matrix) {
    // проходимо по кожному елементу в рядку
    for (let item of row) {
      if (item === "^^") {
        count++; // якщо знайшли кота — додаємо 1
      }
    }
  }

  return count;
}

module.exports = {
  countCats,
};
