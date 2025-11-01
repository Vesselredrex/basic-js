const { NotImplementedError } = require("../lib");

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const discarded = new Set();

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current === "--discard-next") {
      if (i + 1 < arr.length) {
        discarded.add(i + 1);
        i++;
      }
    } else if (current === "--discard-prev") {
      if (i - 1 >= 0 && !discarded.has(i - 1)) {
        result.pop();
      }
    } else if (current === "--double-next") {
      if (i + 1 < arr.length && !discarded.has(i + 1)) {
        result.push(arr[i + 1]);
      }
    } else if (current === "--double-prev") {
      if (i - 1 >= 0 && !discarded.has(i - 1) && result.length > 0) {
        result.push(result[result.length - 1]);
      }
    } else if (!discarded.has(i)) {
      result.push(current);
    }
  }

  return result;
}

module.exports = {
  transform,
};
