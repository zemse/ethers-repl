const ethers = require("ethers");

module.exports = function () {
  // TODO take API key from an env variable. (underscore added to prevent simple scrapers)
  const AL_CHEMY = "BlFofLhaR2b18O08NFxUKPdBjHjRCj4P";
  return {
    provider: {
      // TODO allow providing custom providers for custom RPCs
      mainnet: ethers.getDefaultProvider("mainnet"),
      ropsten: ethers.getDefaultProvider("ropsten"),
      rinkeby: ethers.getDefaultProvider("rinkeby"),
      kovan: ethers.getDefaultProvider("kovan"),
      goerli: ethers.getDefaultProvider("goerli"),
      matic: new ethers.providers.StaticJsonRpcProvider(
        `https://polygon-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
      ),
    },
  };
};
