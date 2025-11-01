const { NotImplementedError } = require("../lib");

function sortByHeight(arr) {
  const filtered = arr.filter((item) => item !== -1).sort((a, b) => a - b);

  let index = 0;

  return arr.map((item) => {
    if (item === -1) {
      return -1;
    } else {
      return filtered[index++];
    }
  });
}

module.exports = {
  sortByHeight,
};

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

console.log(sortByHeight([4, 2, 9, 11, 2, 16]));

console.log(sortByHeight([-1, -1, -1]));

console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));

console.log(sortByHeight([]));
