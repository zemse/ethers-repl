const ethers = require("ethers");

module.exports = function () {
  // TODO take API key from an env variable. (underscore added to prevent simple scrapers)
  const AL_CHEMY = "BlFofLhaR2b18O08NFxUKPdBjHjRCj4P";

  const mainnet = new ethers.providers.StaticJsonRpcProvider(
    `https://eth-mainnet.alchemyapi.io/v2/${AL_CHEMY}`
  );
  const mainnetWss = new ethers.providers.WebSocketProvider(
    `wss://eth-mainnet.alchemyapi.io/v2/${AL_CHEMY}`
  );
  const ropsten = new ethers.providers.StaticJsonRpcProvider(
    `https://eth-ropsten.alchemyapi.io/v2/${AL_CHEMY}`
  );
  const ropstenWss = new ethers.providers.WebSocketProvider(
    `wss://eth-ropsten.alchemyapi.io/v2/${AL_CHEMY}`
  );
  const rinkeby = new ethers.providers.StaticJsonRpcProvider(
    `https://eth-rinkeby.alchemyapi.io/v2/${AL_CHEMY}`
  );
  const rinkebyWss = new ethers.providers.WebSocketProvider(
    `wss://eth-rinkeby.alchemyapi.io/v2/${AL_CHEMY}`
  );
  const kovan = new ethers.providers.StaticJsonRpcProvider(
    `https://eth-kovan.alchemyapi.io/v2/${AL_CHEMY}`
  );
  const kovanWss = new ethers.providers.WebSocketProvider(
    `wss://eth-kovan.alchemyapi.io/v2/${AL_CHEMY}`
  );
  const goerli = new ethers.providers.StaticJsonRpcProvider(
    `https://eth-goerli.alchemyapi.io/v2/${AL_CHEMY}`
  );
  const goerliWss = new ethers.providers.WebSocketProvider(
    `wss://eth-goerli.alchemyapi.io/v2/${AL_CHEMY}`
  );
  const arbmain = new ethers.providers.StaticJsonRpcProvider(
    `https://arb-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  );
  const arbmainWss = new ethers.providers.WebSocketProvider(
    `wss://arb-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  );
  const arbtest = new ethers.providers.StaticJsonRpcProvider(
    `https://arb-rinkeby.g.alchemy.com/v2/${AL_CHEMY}`
  );
  const arbtestWss = new ethers.providers.WebSocketProvider(
    `wss://arb-rinkeby.g.alchemy.com/v2/${AL_CHEMY}`
  );
  const opmain = new ethers.providers.StaticJsonRpcProvider(
    `https://arb-rinkeby.g.alchemy.com/v2/${AL_CHEMY}`
  );
  const opmainWss = new ethers.providers.WebSocketProvider(
    `wss://arb-rinkeby.g.alchemy.com/v2/${AL_CHEMY}`
  );
  const optest = new ethers.providers.StaticJsonRpcProvider(
    `https://opt-kovan.g.alchemy.com/v2/${AL_CHEMY}`
  );
  const optestWss = new ethers.providers.WebSocketProvider(
    `wss://opt-kovan.g.alchemy.com/v2/${AL_CHEMY}`
  );
  const matic = new ethers.providers.StaticJsonRpcProvider(
    `https://polygon-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  );
  const maticWss = new ethers.providers.WebSocketProvider(
    `wss://polygon-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  );

  return {
    // TODO allow providing custom providers for custom RPCs
    mainnet,
    m: mainnet,
    ropsten,
    r: ropsten,
    rinkeby,
    rn: rinkeby,
    kovan,
    k: kovan,
    goerli,
    g: goerli,
    arbmain,
    arbtest,
    opmain,
    optest,
    matic,
    mainnetWss,
    ropstenWss,
    rinkebyWss,
    kovanWss,
    goerliWss,
    arbmainWss,
    arbtestWss,
    opmainWss,
    optestWss,
    maticWss,
  };
};
