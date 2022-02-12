const ethers = require("ethers");

module.exports = function () {
  return {
    provider: {
      // TODO allow providing custom providers for custom RPCs
      mainnet: ethers.getDefaultProvider("mainnet"),
      ropsten: ethers.getDefaultProvider("ropsten"),
      rinkeby: ethers.getDefaultProvider("rinkeby"),
      kovan: ethers.getDefaultProvider("kovan"),
      goerli: ethers.getDefaultProvider("goerli"),
    },
  };
};
