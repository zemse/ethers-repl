# ethers-repl

Opens ethers.js in Node.js repl with Ethers.js and some providers / contracts preloaded in global.

## Installation

```sh
npm i -g ethers ethers-repl
```

## Usage

Use the command `ethers` or `ethers-repl` in your terminal. This should open a REPL.

```ts
$ ethers

ethers-repl>
```

### You can access `ethers` here along with usual nodejs repl things.

```
ethers-repl> ethers.version
'6.3.0'
```

### You can directly access utils.

```
ethers-repl> ethers.getAddress('c21f0a4a6eb27762a218acbb05922fa5703dcf3f')
'0xC21F0a4a6EB27762A218aCbB05922fa5703dCF3f'
ethers-repl> getAddress('c21f0a4a6eb27762a218acbb05922fa5703dcf3f')
'0xC21F0a4a6EB27762A218aCbB05922fa5703dCF3f'
```

### Inspection is better

```
ethers-repl> FixedNumber.fromValue(1, 18)
FixedNumber { format: undefined, value: "0.000000000000000001" }
```

### Also there are `dai` and `weth` contracts

```
ethers-repl> await dai.balanceOf("vitalik.eth")
555508493698012633714742n
```

### You can also use cli directly instead of REPL

```
$ ethers dai balanceOf "vitalik.eth"
27183125886000881460504n
```

### Get a vanity wallet real quick!

```ts
ethers-repl> wallet = vanity(startsWith('dad'), 10000)
Wallet {
  _isSigner: true,
  address: '0xdAd5589FA9A17f13B69a3A3a2Fff24190e22f18c',
  provider: null
}
```

### Save and load wallets

```ts
// you can list wallets which are stored at keystores.path(), can be set with env var: ETHERS_REPL_KEYSTORES_PATH
ethers-repl> keystores.list()
[
  {
    address: '0xff2b2f4d55cc37661dbd88d92b1fff8b29cda06c',
    jsonFile: '/Users/sohamzemse/ethers-repl-wallets/0xFf2B2f4d55cC37661DbD88d92b1FFf8b29CDa06C.json'
  }
]
// just pass some part of address, password and provider object
ethers-repl> wallet = keystores.load('0xff', 'mypassword', mainnet)
Unlocking 0xFf2B2f4d55cC37661DbD88d92b1FFf8b29CDa06C
Wallet {
  _isSigner: true,
  _signingKey: [Function (anonymous)],
  address: '0xFf2B2f4d55cC37661DbD88d92b1FFf8b29CDa06C',
  _mnemonic: [Function (anonymous)],
  provider: null
}
// it returns an ethers.Wallet which you can use as usual
ethers-repl> await wallet.getBalance()
BigNumber { value: "0", hex: "0x00" }
```

### You can generate SQRL-ed wallet

Learn more about SQRL-ing from an [article by ricmoo](https://blog.ricmoo.com/sqrl-ing-mnemonic-phrases-b68b2dc1f75b).

```ts
ethers-repl> wallet = await sqrlMnemonic('some mnemonic here' , "some password")
Wallet {
  provider: null,
  address: '0x9F432F2D6b24A95aDAf9242f79B573fd93F9804D'
}
```