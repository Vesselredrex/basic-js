const { NotImplementedError } = require("../lib");

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current === "--discard-next") {
      i++;
    } else if (current === "--discard-prev") {
      if (result.length > 0 && arr[i - 1] !== undefined) {
        result.pop();
      }
    } else if (current === "--double-next") {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      }
    } else if (current === "--double-prev") {
      if (i - 1 >= 0 && arr[i - 1] === result[result.length - 1]) {
        result.push(arr[i - 1]);
      }
    } else {
      result.push(current);
    }
  }

  return result;
}

module.exports = {
  transform,
};

console.log(transform([1, 2, 3, "--double-next", 4, 5]));

console.log(transform([1, 2, 3, "--discard-prev", 4, 5]));

console.log(transform([1, 2, "--discard-next", 3, 4]));

console.log(transform([1, 2, 3, "--double-prev"]));

console.log(transform(["--double-prev", 1, 2, 3]));

console.log(transform([1, 2, 3, "--double-next"]));

console.log(transform([1, 2, 3, "--discard-next", 4, 5, "--discard-prev", 6]));

console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);

try {
  transform("not an array");
} catch (e) {
  console.log(e.message);
}
