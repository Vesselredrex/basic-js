const { NotImplementedError } = require("../lib");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(encryptedMessage, key, false);
  }

  process(text, key, isEncrypt) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    text = text.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (alphabet.includes(char)) {
        const textPos = alphabet.indexOf(char);
        const keyPos = alphabet.indexOf(key[keyIndex % key.length]);

        let newPos;
        if (isEncrypt) {
          newPos = (textPos + keyPos) % 26;
        } else {
          newPos = (textPos - keyPos + 26) % 26;
        }

        result += alphabet[newPos];
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt("attack at dawn!", "alphonse"));

console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));

console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));

console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
