const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Створюємо результуючу матрицю
  const result = [];

  // Проходимо по кожній клітинці
  for (let row = 0; row < rows; row++) {
    result[row] = [];

    for (let col = 0; col < cols; col++) {
      // Рахуємо міни навколо поточної клітинки
      let mineCount = 0;

      // Перевіряємо всіх 8 сусідів
      // Напрямки: NW, N, NE, W, E, SW, S, SE
      const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1], // верхній ряд
        [0, -1],
        [0, 1], // ліво і право
        [1, -1],
        [1, 0],
        [1, 1], // нижній ряд
      ];

      for (let [dRow, dCol] of directions) {
        const newRow = row + dRow;
        const newCol = col + dCol;

        // Перевіряємо чи сусід в межах матриці
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          // Якщо там міна, збільшуємо лічильник
          if (matrix[newRow][newCol] === true) {
            mineCount++;
          }
        }
      }

      result[row][col] = mineCount;
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};

// Тести для перевірки:
console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);

console.log(
  minesweeper([
    [false, false, false],
    [false, false, false],
  ])
);

console.log(
  minesweeper([
    [true, true],
    [true, true],
  ])
);

console.log(
  minesweeper([
    [true, false, false, true],
    [false, false, false, false],
    [true, false, false, true],
  ])
);
