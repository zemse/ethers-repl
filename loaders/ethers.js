const inspect = require("util").inspect;
const ethers = require("ethers");

module.exports = function () {
  // Code taken from https://github.com/ethers-io/website/blob/ce51c7cf3b9c597655d3a710acedc351b517a85a/playground/sandbox.js#L504-L575
  // Pretty Format some common ethers classes
  function S(v) {
    return JSON.stringify(v);
  }

  // TODO fix color in console.log
  ethers.BigNumber.prototype[inspect.custom] = function () {
    return `BigNumber { value: ${S(this.toString())} }`;
  };

  ethers.FixedNumber.prototype[inspect.custom] = function () {
    return `FixedNumber { format: ${S(this.format.name)}, value: ${S(
      this.toString()
    )} }`;
  };

  ethers.Wordlist.prototype[inspect.custom] = function () {
    return `Wordlist { locale: ${S(this.locale)} }`;
  };

  Uint8Array.prototype[inspect.custom] = function () {
    return `Uint8Array { ${Array.prototype.map
      .call(this, (i) => String(i))
      .join(", ")} }`;
  };

  //ethers.providers.Formatter.prototype[inspect.custom] = function() {
  //  return `Formatter: { }`;
  //};

  ethers.providers.AlchemyProvider.prototype[inspect.custom] = function () {
    return new inspect.NamedObject(this.constructor.name, {
      network: this._network.name,
      url: this.connection.url,
      apiKey: this.isCommunityResource() ? "default" : this.apiKey,
    });
  };

  ethers.providers.CloudflareProvider.prototype[inspect.custom] = function () {
    return new inspect.NamedObject(this.constructor.name, {
      network: this._network.name,
      url: this.connection.url,
    });
  };

  ethers.providers.EtherscanProvider.prototype[inspect.custom] = function () {
    return new inspect.NamedObject(this.constructor.name, {
      network: this._network.name,
      baseUrl: this.baseUrl,
      apiKey: this.isCommunityResource() ? "default" : this.apiKey,
    });
  };

  ethers.providers.FallbackProvider.prototype[inspect.custom] = function () {
    return new inspect.NamedObject(this.constructor.name, {
      network: this._network.name,
      anyNetwork: this.anyNetwork,
      providerConfigs: this.providerConfigs,
      quorum: this.quorum,
    });
  };

  ethers.providers.InfuraProvider.prototype[inspect.custom] = function () {
    return new inspect.NamedObject(this.constructor.name, {
      network: this._network.name,
      url: this.connection.url,
      projectId: this.isCommunityResource() ? "default" : this.projectId,
      projectSecret: this.projectSecret,
    });
  };

  ethers.providers.PocketProvider.prototype[inspect.custom] = function () {
    return new inspect.NamedObject(this.constructor.name, {
      network: this._network.name,
      url: this.connection.url,
      applicationId: this.isCommunityResource() ? "default" : this.projectId,
      applicationSecretKey: this.applicationSecretKey,
      loadBalancer: this.loadBalancer,
    });
  };

  return {
    ethers,
    ...ethers,
    ...ethers.utils,
    ...ethers.providers,
    ...ethers.constants,
  };
};
