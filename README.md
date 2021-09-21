# solidity-exercises
[![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.7-orange.svg)](https://docs.soliditylang.org/en/v0.8.7/)
[![Node.js](https://img.shields.io/badge/nodejs-%5E14-green.svg?logo=node.js&style=flat)](https://nodejs.org/)

To using this repository to compile and deploy Solidity contract, it is recommended to install the <a href="https://metamask.io/download.html" target="_blank" rel="noreferrer noopener">MetaMask</a> plugin on your Chrome browser and register the <a href="https://infura.io/" target="_blank" rel="noreferrer noopener">Infura</a> service.

After that, modify the `.env` file on each exercise folder, then you can run the scripts in the folder to deploy and call the smart contract.

:warning: **Remember to use TestNet such as <b>Rinkbey</b> in practice.**

## Compile
Using solc-js to compile the smart contracts
```
npm install -g solc
```

Generate solidity bytecode ( `.bin` file )
```
solcjs --bin --base-path . ./SomeContract.sol
```

Generate `.abi` file
```
solcjs --abi --base-path . ./SomeContract.sol
```
