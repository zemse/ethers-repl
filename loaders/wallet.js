const os = require("os");
const ethers = require("ethers");
const fs = require("fs-extra"); // TODO get rid of dependency

let _walletDirPath =
  process.env.ETHERS_REPL_KEYSTORES_PATH ||
  process.env.ETHERS_REPL_WALLET_PATH ||
  os.homedir() + "/ethers-repl-wallets";

module.exports = function () {
  function listWalletAddresses() {
    fs.ensureDirSync(_walletDirPath);
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

  async function saveWallet(wallet, password) {
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
  }
  function loadWallet(walletId, password, provider) {
    let walletStr = walletId;
    if (typeof walletId === "number") {
      const entry = listWalletAddresses()[walletId];
      if (entry) {
        walletStr = entry.address;
      } else {
        walletStr = walletId.toString();
      }
    }

    if (!password) {
      throw new Error("please provide password");
    }
    if (typeof password === "number") {
      password = password.toString();
    }

    // TODO allow walletStr to be partial wallet address
    for (const { address, jsonFile } of listWalletAddresses()) {
      if (address.toLowerCase().includes(walletStr.toLowerCase())) {
        console.log(`Unlocking ${address}`);
        const keystore = fs.readJSONSync(jsonFile);
        try {
          const wallet = ethers.Wallet.fromEncryptedJsonSync(
            JSON.stringify(keystore),
            password
          );
          if (provider) {
            return wallet.connect(provider);
          } else {
            return wallet;
          }
        } catch (err) {
          console.error(err);
          console.log(keystore);
          return;
        }
      }
    }
  }
  function walletDirPath() {
    console.log("The path can be set using env var ETHERS_REPL_KEYSTORES_PATH");
    return _walletDirPath;
  }
  function setWalletPath(newPath) {
    _walletDirPath = newPath;
  }

  return {
    // listWalletAddresses,
    // loadWalletAddresses: listWalletAddresses, // alias
    // loadWalletList: listWalletAddresses, // alias
    // saveWallet,
    // storeWallet: saveWallet, // alias
    // loadWallet,
    // walletDirPath,
    // setWalletPath,
    keystores: {
      save: saveWallet,
      load: loadWallet,
      list: listWalletAddresses,
      path: walletDirPath,
      setPath: setWalletPath,
    },
  };
};
