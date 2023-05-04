#!/usr/bin/env node --experimental-repl-await
const repl = require("repl");
const ethers = require("./loaders/ethers");
const wallet = require("./loaders/wallet");
const provider = require("./loaders/provider");
const contract = require("./loaders/contract");
const utilsExtra = require("./loaders/utils-extra");

// define available methods and state
const state = {
  ...ethers(),
  ...wallet(),
  ...provider(),
  ...contract(),
  ...utilsExtra(),
};

// node, cli.js, command name, util name (optional), ...args (optional)
let [, , commandName, ...args] = process.argv;

let result = null;
if (args.length !== 0) {
  let _obj = state;
  let _args = args.slice();
  while (true) {
    let [utilName, ...utilArgs] = _args;
    let valOrFn = _obj[utilName];
    if (valOrFn instanceof Function) {
      // run the function
      result = valOrFn.bind(_obj)(...utilArgs);
      if (result instanceof Promise) {
        // print after the promise resolves
        result.then((res) => {
          console.log(res);
        });
      } else {
        // print function result right now
        console.log(result);
      }
      break;
    } else if (typeof valOrFn === "object") {
      _obj = valOrFn;
      _args = utilArgs;
    } else {
      // print value right now
      console.log(valOrFn);
      break;
    }
  }
}
state.result = result;

if (
  commandName === "ethersrepl" ||
  commandName === "ethers-repl" ||
  args.length === 0
) {
  const myRepl = repl.start("ethers-repl> ");

  Object.assign(myRepl.context, state);
}
