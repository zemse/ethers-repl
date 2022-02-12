# ethers-repl

Opens ethers.js in Node.js repl along with some objects initialized.

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
ethers-repl> BigNumber.from(123456).mul(3)
BigNumber { _hex: '0x05a6c0', _isBigNumber: true }
ethers-repl> utils.getAddress('c21f0a4a6eb27762a218acbb05922fa5703dcf3f')
'0xC21F0a4a6EB27762A218aCbB05922fa5703dCF3f'
```
