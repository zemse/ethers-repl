const ethers = require("ethers");

module.exports = function () {
  // TODO take API key from an env variable. (underscore added to prevent simple scrapers)
  const AL_CHEMY = "BlFofLhaR2b18O08NFxUKPdBjHjRCj4P";

  let isProviderErrorPrinted = false;
  const printProviderError = (e) => {
    if (!isProviderErrorPrinted) {
      console.error(e);
      isProviderErrorPrinted = true;
    }
  };

  const mainnet = new ethers.providers.StaticJsonRpcProvider(
    `https://eth-mainnet.alchemyapi.io/v2/${AL_CHEMY}`
  );
  mainnet._ready().catch(() => printProviderError());

  const ropsten = new ethers.providers.StaticJsonRpcProvider(
    `https://eth-ropsten.alchemyapi.io/v2/${AL_CHEMY}`
  );
  ropsten._ready().catch(printProviderError);

  const rinkeby = new ethers.providers.StaticJsonRpcProvider(
    `https://eth-rinkeby.alchemyapi.io/v2/${AL_CHEMY}`
  );
  rinkeby._ready().catch(printProviderError);

  const kovan = new ethers.providers.StaticJsonRpcProvider(
    `https://eth-kovan.alchemyapi.io/v2/${AL_CHEMY}`
  );
  kovan._ready().catch(printProviderError);

  const goerli = new ethers.providers.StaticJsonRpcProvider(
    `https://eth-goerli.alchemyapi.io/v2/${AL_CHEMY}`
  );
  goerli._ready().catch(printProviderError);

  const arbmain = new ethers.providers.StaticJsonRpcProvider(
    `https://arb-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  );
  arbmain._ready().catch(printProviderError);

  const arbtest = new ethers.providers.StaticJsonRpcProvider(
    `https://arb-rinkeby.g.alchemy.com/v2/${AL_CHEMY}`
  );
  arbtest._ready().catch(printProviderError);

  const opmain = new ethers.providers.StaticJsonRpcProvider(
    `https://arb-rinkeby.g.alchemy.com/v2/${AL_CHEMY}`
  );
  opmain._ready().catch(printProviderError);

  const optest = new ethers.providers.StaticJsonRpcProvider(
    `https://opt-kovan.g.alchemy.com/v2/${AL_CHEMY}`
  );
  optest._ready().catch(printProviderError);

  const matic = new ethers.providers.StaticJsonRpcProvider(
    `https://polygon-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  );
  matic._ready().catch(printProviderError);

  // const mainnetWss = new ethers.providers.WebSocketProvider(
  //   `wss://eth-mainnet.alchemyapi.io/v2/${AL_CHEMY}`
  // );
  // mainnetWss._ready().catch(() => printProviderError());

  // const ropstenWss = new ethers.providers.WebSocketProvider(
  //   `wss://eth-ropsten.alchemyapi.io/v2/${AL_CHEMY}`
  // );
  // ropstenWss._ready().catch(printProviderError);

  // const rinkebyWss = new ethers.providers.WebSocketProvider(
  //   `wss://eth-rinkeby.alchemyapi.io/v2/${AL_CHEMY}`
  // );
  // rinkebyWss._ready().catch(printProviderError);

  // const kovanWss = new ethers.providers.WebSocketProvider(
  //   `wss://eth-kovan.alchemyapi.io/v2/${AL_CHEMY}`
  // );
  // kovanWss._ready().catch(printProviderError);

  // const goerliWss = new ethers.providers.WebSocketProvider(
  //   `wss://eth-goerli.alchemyapi.io/v2/${AL_CHEMY}`
  // );
  // goerliWss._ready().catch(printProviderError);

  // const arbmainWss = new ethers.providers.WebSocketProvider(
  //   `wss://arb-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  // );
  // arbmainWss._ready().catch(printProviderError);

  // const arbtestWss = new ethers.providers.WebSocketProvider(
  //   `wss://arb-rinkeby.g.alchemy.com/v2/${AL_CHEMY}`
  // );
  // arbtestWss._ready().catch(printProviderError);

  // const mainnetWss = new ethers.providers.WebSocketProvider(
  //   `wss://eth-mainnet.alchemyapi.io/v2/${AL_CHEMY}`
  // );
  // mainnetWss._ready().catch(() => printProviderError());

  // const ropstenWss = new ethers.providers.WebSocketProvider(
  //   `wss://eth-ropsten.alchemyapi.io/v2/${AL_CHEMY}`
  // );
  // ropstenWss._ready().catch(printProviderError);

  // const rinkebyWss = new ethers.providers.WebSocketProvider(
  //   `wss://eth-rinkeby.alchemyapi.io/v2/${AL_CHEMY}`
  // );
  // rinkebyWss._ready().catch(printProviderError);

  // const kovanWss = new ethers.providers.WebSocketProvider(
  //   `wss://eth-kovan.alchemyapi.io/v2/${AL_CHEMY}`
  // );
  // kovanWss._ready().catch(printProviderError);

  // const goerliWss = new ethers.providers.WebSocketProvider(
  //   `wss://eth-goerli.alchemyapi.io/v2/${AL_CHEMY}`
  // );
  // goerliWss._ready().catch(printProviderError);

  // const arbmainWss = new ethers.providers.WebSocketProvider(
  //   `wss://arb-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  // );
  // arbmainWss._ready().catch(printProviderError);

  // const arbtestWss = new ethers.providers.WebSocketProvider(
  //   `wss://arb-rinkeby.g.alchemy.com/v2/${AL_CHEMY}`
  // );
  // arbtestWss._ready().catch(printProviderError);

  // const opmainWss = new ethers.providers.WebSocketProvider(
  //   `wss://arb-rinkeby.g.alchemy.com/v2/${AL_CHEMY}`
  // );
  // opmainWss._ready().catch(printProviderError);

  // const optestWss = new ethers.providers.WebSocketProvider(
  //   `wss://opt-kovan.g.alchemy.com/v2/${AL_CHEMY}`
  // );
  // optestWss._ready().catch(printProviderError);

  // const maticWss = new ethers.providers.WebSocketProvider(
  //   `wss://polygon-mainnet.g.alchemy.com/v2/${AL_CHEMY}`
  // );
  // maticWss._ready().catch(printProviderError);

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
    // mainnetWss,
    // ropstenWss,
    // rinkebyWss,
    // kovanWss,
    // goerliWss,
    // arbmainWss,
    // arbtestWss,
    // opmainWss,
    // optestWss,
    // maticWss,
  };
};
