const ethers = require("ethers-v6");

module.exports = function () {
  // TODO take API key from an env variable. (underscore added to prevent simple scrapers)
  const AL_CHEMY = "BlFofLhaR2b18O08NFxUKPdBjHjRCj4P";

  const mainnet = new ethers.JsonRpcProvider(
    `https://eth-mainnet.alchemyapi.io/v2/${AL_CHEMY}`
  );

  const goerli = new ethers.JsonRpcProvider(
    `https://eth-goerli.alchemyapi.io/v2/${AL_CHEMY}`
  );

  const sepolia = new ethers.JsonRpcProvider(
    `https://eth-sepolia.g.alchemy.com/v2/${AL_CHEMY}`
  );

  const arbmain = new ethers.JsonRpcProvider(
    `https://arb-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  );

  const opmain = new ethers.JsonRpcProvider(
    `https://opt-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  );

  const optest = new ethers.JsonRpcProvider(
    `https://opt-goerli.g.alchemy.com/v2/${AL_CHEMY}`
  );

  const matic = new ethers.JsonRpcProvider(
    `https://polygon-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  );

  return {
    // TODO allow providing custom providers for custom RPCs
    mainnet,
    m: mainnet,
    goerli,
    g: goerli,
    sepolia,
    s: sepolia,
    arbmain,
    opmain,
    optest,
    matic,
  };
};
