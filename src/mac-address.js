const { NotImplementedError } = require("../lib");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  // Регулярний вираз для перевірки MAC-48 адреси
  // ^           - початок рядка
  // [0-9A-F]    - шістнадцяткова цифра (0-9 або A-F)
  // {2}         - рівно 2 рази
  // -           - дефіс
  // {5}         - попередня група (2 цифри + дефіс) повторюється 5 разів
  // [0-9A-F]{2} - остання група (2 цифри без дефіса)
  // $           - кінець рядка

  const macPattern = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/;

  return macPattern.test(inputString);
}

module.exports = {
  isMAC48Address,
};

// Тести для перевірки:
console.log(isMAC48Address("00-1B-63-84-45-E6"));

console.log(isMAC48Address("01-23-45-67-89-AB"));

console.log(isMAC48Address("FF-FF-FF-FF-FF-FF"));

console.log(isMAC48Address("00-1B-63-84-45-E6-12"));

console.log(isMAC48Address("00:1B:63:84:45:E6"));

console.log(isMAC48Address("G0-1B-63-84-45-E6"));

console.log(isMAC48Address("0-1B-63-84-45-E6"));

console.log(isMAC48Address("00-1b-63-84-45-e6"));

console.log(isMAC48Address(""));
