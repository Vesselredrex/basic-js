const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split("");
  let count = 0;

  for (let char of s2) {
    let index = arr1.indexOf(char);
    if (index !== -1) {
      count++;
      arr1.splice(index, 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
