const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // Якщо рядок порожній, повертаємо порожній рядок
  if (!str) return "";

  let result = ""; // Тут будемо зберігати результат
  let count = 1; // Лічильник повторень (починаємо з 1)

  // Йдемо по кожній літері в рядку
  for (let i = 0; i < str.length; i++) {
    // Перевіряємо: чи наступна літера така ж як поточна?
    if (str[i] === str[i + 1]) {
      // Якщо так - збільшуємо лічильник
      count++;
    } else {
      // Якщо ні - записуємо результат
      // Якщо літера одна (count === 1), не пишемо число
      result += (count > 1 ? count : "") + str[i];
      // Скидаємо лічильник для наступної літери
      count = 1;
    }
  }

  return result;
}

// Тести для перевірки:
console.log(encodeLine("aabbbc")); // 2a3bc
console.log(encodeLine("aaaa")); // 4a
console.log(encodeLine("abc")); // abc
console.log(encodeLine("")); // ''
console.log(encodeLine("aabbcccd")); // 2a2b3cd

module.exports = {
  encodeLine,
};
