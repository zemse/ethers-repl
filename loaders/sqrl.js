// based on https://blog.ricmoo.com/sqrl-ing-mnemonic-phrases-b68b2dc1f75b
const ethers = require("ethers-v6");

module.exports = function () {
  function sqrlMnemonic(mnemonic, password) {
    let passwordBytes = ethers.toUtf8Bytes(password, "NFKC");
    let saltBytes = ethers.toBeArray(
      ethers.HDNodeWallet.fromMnemonic(ethers.Mnemonic.fromPhrase(mnemonic))
        .privateKey
    );

    return ethers
      .scrypt(passwordBytes, saltBytes, 1 << 20, 8, 1, 32)
      .then((key) => {
        const derivedPassword = ethers.toBeHex(key);
        return new ethers.Wallet(
          ethers.HDNodeWallet.fromMnemonic(
            ethers.Mnemonic.fromPhrase(mnemonic, derivedPassword)
          ).privateKey
        );
      });
  }

  return { sqrlMnemonic };
};
