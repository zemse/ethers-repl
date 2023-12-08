const ethers = require("ethers-v6");
const { id, zeroPadValue } = require("ethers-v6");

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

  function random(n = 32) {
    return ethers.hexlify(ethers.randomBytes(n));
  }

  // vanity(startsWith('f')) => returns ethers.Wallet with address 0xf...
  function vanity(isWalletOkay, loopIterations = 100) {
    let sk = ethers.getBigInt(ethers.hexlify(ethers.randomBytes(32)));

    while (true) {
      const wallet = new ethers.Wallet("0x" + sk.toString(16));
      if (isWalletOkay(wallet)) {
        return wallet;
      }
      if (!loopIterations) {
        throw new Error(
          "please use a larger loopIterations value (second arg to vanity function)"
        );
      }
      loopIterations--;
      sk = sk + 1n;
    }
  }

  function startsWith(str) {
    if (typeof str !== "string") {
      throw new Error("startsWith first arg must be a string");
    }
    if (!str.startsWith("0x")) {
      str = "0x" + str.toLowerCase();
    }
    if (!ethers.isHexString(str)) {
      throw new Error("must be a hex string");
    }
    return (wallet) => wallet.address.toLowerCase().startsWith(str);
  }

  function bytes32(val) {
    return bytesN(32, val);
  }

  function bytes20(val) {
    return bytesN(20, val);
  }

  function address(val) {
    return bytesN(20, val);
  }

  function bytesN(n, val) {
    let hex = ethers.getBigInt(val).toString(16);
    if (hex.length % 2 === 1) hex = "0" + hex;
    return zeroPadValue("0x" + hex, n);
  }

  function bits(val) {
    let result = val.toString(2);
    const mod = result.length % 8;
    result = "0".repeat(mod === 0 ? 0 : 8 - mod) + result;

    const bytes = [];

    while (result.length !== 0) {
      bytes.unshift(result.slice(-8));
      result = result.slice(0, -8);
    }

    return bytes;
  }

  const hash = ethers.keccak256;
  const pad = bytes32;

  return {
    wordify,
    selector,
    random,
    vanity,
    startsWith,
    bytes32,
    bytes20,
    address,
    bytesN,
    hash,
    pad,
    bits,
  };
};
