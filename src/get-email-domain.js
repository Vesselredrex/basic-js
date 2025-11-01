const { NotImplementedError } = require("../lib");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // Знаходимо позицію ОСТАННЬОГО символу @
  const lastAtIndex = email.lastIndexOf("@");

  // Повертаємо все після останнього @
  return email.slice(lastAtIndex + 1);
}

module.exports = {
  getEmailDomain,
};

console.log(getEmailDomain("prettyandsimple@example.com"));

console.log(getEmailDomain("user@mail.ru"));

console.log(getEmailDomain("admin@company.co.uk"));

console.log(getEmailDomain("very.unusual.@.unusual.com@example.com"));

console.log(getEmailDomain("user@subdomain.example.com"));
