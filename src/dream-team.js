const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Перевіряємо, чи є members масивом
  if (!Array.isArray(members)) {
    return false;
  }

  // Обробляємо масив:
  const teamName = members
    .filter((member) => typeof member === "string") // Тільки рядки
    .map((name) => name.trim()[0].toUpperCase()) // СПОЧАТКУ toUpperCase!
    .sort() // Тепер сортуємо великі літери
    .join(""); // З'єднуємо

  return teamName;
}

module.exports = {
  createDreamTeam,
};

// Тестові приклади:
console.log(createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]));
// => 'ADMM'

console.log(createDreamTeam(["Olivia", 1111, "Lily", "Oscar", true, null]));
// => 'LOO'

console.log(createDreamTeam(["bill", "Emily", "tea", "Dorothy", "vaughn"]));
// => 'BDETV' (не 'BETDV')

// Перевірка edge cases:
console.log(createDreamTeam(["  Matt  ", "  Ann", "Dmitry", "Max"]));
// => 'ADMM' (обробляє пробіли)

console.log(createDreamTeam(null));
// => false

console.log(createDreamTeam([1, 2, 3]));
// => '' (порожній рядок, бо немає рядків)
