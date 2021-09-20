# solidity-exercises
[![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.7-orange.svg)](https://docs.soliditylang.org/en/v0.8.7/)
[![Node.js](https://img.shields.io/badge/nodejs-%5E14-green.svg?logo=node.js&style=flat)](https://nodejs.org/)

Practice writing smart contracts with Solidity (using Web3 and Infura)

## Compile
Using solc-js to compile the smart contracts
```
npm install -g solc
```

Generate solidity bytecode
```
solcjs --bin --base-path . ./SomeContract.sol
```
