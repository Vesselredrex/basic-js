const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const usedNames = {};

  const result = [];

  for (let name of names) {
    if (!usedNames[name]) {
      result.push(name);

      usedNames[name] = 1;
    } else {
      let newName;
      let counter = usedNames[name];

      do {
        newName = `${name}(${counter})`;
        counter++;
      } while (usedNames[newName]);

      result.push(newName);

      usedNames[newName] = 1;

      usedNames[name] = counter;
    }
  }

  return result;
}

module.exports = {
  renameFiles,
};

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

console.log(renameFiles(["doc", "doc", "image", "doc(1)", "doc"]));

console.log(renameFiles(["a", "b", "cd", "b", "a"]));

console.log(renameFiles([]));

console.log(renameFiles(["file", "file", "file", "file"]));
