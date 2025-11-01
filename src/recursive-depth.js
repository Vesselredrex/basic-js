const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // Базовий випадок: якщо це не масив, глибина 0
    if (!Array.isArray(arr)) {
      return 0;
    }

    // Якщо масив порожній, глибина 1
    if (arr.length === 0) {
      return 1;
    }

    // Шукаємо максимальну глибину серед усіх елементів
    let maxDepth = 0;

    for (let element of arr) {
      // Якщо елемент - масив, рахуємо його глибину рекурсивно
      if (Array.isArray(element)) {
        const depth = this.calculateDepth(element);
        maxDepth = Math.max(maxDepth, depth);
      }
    }

    // Повертаємо максимальну глибину + 1 (за поточний рівень)
    return maxDepth + 1;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};

const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]));

console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));

console.log(depthCalc.calculateDepth([[[]]]));

console.log(depthCalc.calculateDepth([1, [2, [3, [4]]]]));

console.log(depthCalc.calculateDepth([1, [8, [[]]], [8], 1, [8, []], []]));

console.log(depthCalc.calculateDepth([]));

console.log(depthCalc.calculateDepth([1, 2, 3]));
