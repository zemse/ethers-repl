const ethers = require("ethers-v5");
const { id, zeroPadValue } = require("ethers-v6");

module.exports = function () {
  return {
    ethersv5: ethers,
    ethers_v5: ethers,
    v5: {
      ...ethers,
      ...ethers.providers,
      ...ethers.constants,
      ...ethers.utils,
    },
  };
};
