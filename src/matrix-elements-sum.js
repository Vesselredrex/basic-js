const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // Якщо матриця порожня
  if (!matrix || matrix.length === 0) return 0;

  let sum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Проходимо по кожному стовпцю
  for (let col = 0; col < cols; col++) {
    // Проходимо по кожному рядку в стовпці (зверху вниз)
    for (let row = 0; row < rows; row++) {
      // Якщо зустріли 0, зупиняємось для цього стовпця
      if (matrix[row][col] === 0) {
        break; // Більше нічого не додаємо в цьому стовпці
      }
      // Інакше додаємо значення до суми
      sum += matrix[row][col];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};

// Тести для перевірки:
console.log(
  getMatrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);

console.log(
  getMatrixElementsSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  getMatrixElementsSum([
    [0, 0, 0],
    [1, 2, 3],
    [4, 5, 6],
  ])
);

console.log(
  getMatrixElementsSum([
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1],
  ])
);

console.log(getMatrixElementsSum([[5]]));

console.log(getMatrixElementsSum([]));
