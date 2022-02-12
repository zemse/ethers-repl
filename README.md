# ethers-repl

Opens ethers.js in Node.js repl with Ethers.js and some providers / contracts preloaded in global.

## Installation

```sh
npm i -g ethers ethers-repl
```

## Usage

Use the command `ethers-repl` in your terminal. This should open a REPL.

```
$ ethers-repl

ethers-repl>
```

You can access `ethers` here along with usual nodejs repl things.

```
ethers-repl> ethers.version
'ethers/5.5.4'
```

You can directly access utils.

```
ethers-repl> ethers.utils.getAddress('c21f0a4a6eb27762a218acbb05922fa5703dcf3f')
'0xC21F0a4a6EB27762A218aCbB05922fa5703dCF3f'
ethers-repl> utils.getAddress('c21f0a4a6eb27762a218acbb05922fa5703dcf3f')
'0xC21F0a4a6EB27762A218aCbB05922fa5703dCF3f'
ethers-repl> getAddress('c21f0a4a6eb27762a218acbb05922fa5703dcf3f')
'0xC21F0a4a6EB27762A218aCbB05922fa5703dCF3f'
```

Inspection is better

```
ethers-repl> BigNumber.from(1)
BigNumber { value: 123456 } // instead of _hex: '0x01e240'
```

Also there are `dai` and `weth` contracts

```
ethers-repl> await dai.balanceOf('vitalik.eth')
BigNumber { value: "2501000000000000000000" }
```

## More features on TODO

- Load wallets
- Making it easy to add contracts and providers and other customisations
