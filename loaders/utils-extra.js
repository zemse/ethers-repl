const ethers = require("ethers");
const { id } = require("ethers/lib/utils");

module.exports = function () {
  function wordify(x, stripFirst) {
    if (typeof x !== "string") {
      throw new Error("first param should be a hex string");
    }
    const words = [];
    if (x.startsWith("0x")) {
      x = x.slice(2);
    }
    if (stripFirst === true) {
      stripFirst = 4;
    }
    if (stripFirst) {
      if (typeof stripFirst !== "number") {
        throw new Error(
          "second param should be number of bytes to strip from start"
        );
      }
      words.push(x.slice(0, stripFirst * 2));
      x = x.slice(stripFirst * 2);
    }
    while (x.length >= 32) {
      words.push(x.slice(0, 64));
      x = x.slice(64);
    }
    if (x) {
      // remaining bytes
      words.push(x);
    }
    return words;
  }

  function selector(str) {
    return id(str).slice(0, 10);
  }

  return {
    wordify,
    selector,
  };
};
