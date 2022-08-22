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

const myRepl = repl.start("ethers-repl> ");

Object.assign(myRepl.context, state);
