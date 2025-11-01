const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (
      position < 1 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.map((link) => `( ${link} )`).join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};

console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain());

console.log(
  chainMaker
    .addLink("GHI")
    .addLink(null)
    .reverseChain()
    .addLink(333)
    .reverseChain()
    .reverseChain()
    .addLink(0)
    .reverseChain()
    .reverseChain()
    .addLink("GHI")
    .finishChain()
);

console.log(
  chainMaker.addLink(1).addLink(2).addLink(3).removeLink(2).finishChain()
);

console.log(chainMaker.addLink(1).addLink(2).reverseChain().finishChain());

try {
  chainMaker.addLink(1).addLink(2).removeLink(0).finishChain();
} catch (e) {
  console.log(e.message);
}
