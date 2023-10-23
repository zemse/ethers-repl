const inspect = require("util").inspect;
const ethers = require("ethers");

module.exports = function () {
  // Code taken from https://github.com/ethers-io/website/blob/ce51c7cf3b9c597655d3a710acedc351b517a85a/playground/sandbox.js#L504-L575
  // Pretty Format some common ethers classes
  function S(v) {
    return JSON.stringify(v);
  }

  // TODO fix color in console.log
  ethers.FixedNumber.prototype[inspect.custom] = function () {
    return `FixedNumber { format: ${S(this.format.name)}, value: ${S(
      this.toString()
    )} }`;
  };

  ethers.Wordlist.prototype[inspect.custom] = function () {
    return `Wordlist { locale: ${S(this.locale)} }`;
  };

  Uint8Array.prototype[inspect.custom] = function () {
    return `Uint8Array { ${Array.prototype.map
      .call(this, (i) => String(i))
      .join(", ")} }`;
  };

  //ethers.providers.Formatter.prototype[inspect.custom] = function() {
  //  return `Formatter: { }`;
  //};

  return {
    ethers,
    ...ethers,
    v6: ethers,
  };
};
