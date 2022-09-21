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

  // vanity(startsWith('f')) => returns ethers.Wallet with address 0xf...
  function vanity(isWalletOkay, loopIterations = 100) {
    let sk = ethers.BigNumber.from(ethers.utils.randomBytes(32));

    while (true) {
      const wallet = new ethers.Wallet(sk.toHexString());
      if (isWalletOkay(wallet)) {
        return wallet;
      }
      if (!loopIterations) {
        throw new Error(
          "please use a larger loopIterations value (second arg to vanity function)"
        );
      }
      loopIterations--;
      sk = sk.add(1);
    }
  }

  function startsWith(str) {
    if (typeof str !== "string") {
      throw new Error("startsWith first arg must be a string");
    }
    if (!str.startsWith("0x")) {
      str = "0x" + str.toLowerCase();
    }
    if (!ethers.utils.isHexString(str)) {
      throw new Error("must be a hex string");
    }
    return (wallet) => wallet.address.toLowerCase().startsWith(str);
  }

  return {
    wordify,
    selector,
    vanity,
    startsWith,
  };
};
