#!/bin/sh

## generate .json, .abi and the binary bytecode of this contract
node ../compile.js
solcjs SimpleStorage.sol --bin --abi

## deploy to the chain
node ../deploy_contract.js
