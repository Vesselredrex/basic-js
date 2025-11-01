const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  // Конвертуємо str в рядок (може бути число, null, тощо)
  str = String(str);

  // Отримуємо параметри з options або встановлюємо значення за замовчуванням
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator !== undefined ? options.separator : "+";
  const addition =
    options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator =
    options.additionSeparator !== undefined ? options.additionSeparator : "|";

  const additionParts = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionParts.push(addition);
  }
  const fullAddition = additionParts.join(additionSeparator);

  const mainBlock = str + fullAddition;

  const result = [];
  for (let i = 0; i < repeatTimes; i++) {
    result.push(mainBlock);
  }

  return result.join(separator);
}

console.log(
  repeater("STRING", {
    repeatTimes: 3,
    separator: "**",
    addition: "PLUS",
    additionRepeatTimes: 3,
    additionSeparator: "00",
  })
);

console.log(
  repeater("REPEATABLE", {
    repeatTimes: 2,
    addition: "ADDITION",
    additionRepeatTimes: 2,
  })
);

console.log(repeater("TESTstr", { repeatTimes: 2 }));

console.log(
  repeater("one", {
    repeatTimes: 1,
  })
);

console.log(
  repeater(null, {
    repeatTimes: 3,
    separator: "??? ",
    addition: null,
    additionRepeatTimes: 3,
    additionSeparator: "!!!",
  })
);

module.exports = {
  repeater,
};
