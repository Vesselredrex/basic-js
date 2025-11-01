const { NotImplementedError } = require("../lib");

function getSumOfDigits(n) {
  while (n > 9) {
    n = String(n)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return n;
}

module.exports = {
  getSumOfDigits,
};

console.log(getSumOfDigits(100));

console.log(getSumOfDigits(91));

console.log(getSumOfDigits(456));

console.log(getSumOfDigits(9999));

console.log(getSumOfDigits(5));

console.log(getSumOfDigits(99));

console.log(getSumOfDigits(12345));
