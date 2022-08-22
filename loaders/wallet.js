const os = require("os");
const ethers = require("ethers");
const fs = require("fs-extra"); // TODO get rid of dependency

let _walletDirPath =
  process.env.ETHERS_REPL_WALLET_PATH || os.homedir() + "/ethers-repl-wallets";

function listWalletAddresses() {
  const files = fs.readdirSync(_walletDirPath);
  const addresses = [];
  for (const file of files) {
    const walletJson = fs.readJSONSync(`${_walletDirPath}/${file}`);
    if (walletJson.address) {
      addresses.push({
        address: ethers.utils.getAddress(walletJson.address),
        jsonFile: `${_walletDirPath}/${file}`,
      });
    }
  }
  return addresses;
}

module.exports = function () {
  return {
    listWalletAddresses,
    async saveWallet(wallet, password) {
      if (!ethers.Wallet.isSigner(wallet)) {
        throw new Error(
          "method saveWallet needs two arguments: first of type ethers.Wallet and second password as string"
        );
      }
      if (typeof password !== "string") {
        throw new Error(
          "method saveWallet needs second argument password as string"
        );
      }
      const walletFilePath = `${_walletDirPath}/${wallet.address}.json`;
      fs.ensureDirSync(_walletDirPath);
      await wallet
        .encrypt(password)
        .then((encryptedWallet) => {
          fs.writeJSONSync(walletFilePath, JSON.parse(encryptedWallet));
          console.log(`Wallet saved to ${walletFilePath}`);
        })
        .catch(console.error);
    },
    loadWallet(walletStr, password) {
      // TODO allow walletStr to be partial wallet address
      for (const { address, jsonFile } of listWalletAddresses()) {
        if (address.toLowerCase().includes(walletStr.toLowerCase())) {
          console.log(`Unlocking ${address}`);
          const keystore = fs.readJSONSync(jsonFile);
          try {
            return ethers.Wallet.fromEncryptedJsonSync(
              JSON.stringify(keystore),
              password
            );
          } catch (err) {
            console.error(err);
            console.log(keystore);
            return;
          }
        }
      }
    },
    walletDirPath() {
      return _walletDirPath;
    },
    setWalletPath(newPath) {
      _walletDirPath = newPath;
    },
  };
};
