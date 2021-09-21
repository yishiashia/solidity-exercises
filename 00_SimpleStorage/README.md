# Compile and deploy this contract

## generate .json, .abi and the binary bytecode of this contract
```
node ../compile.js SimpleStorage
solcjs SimpleStorage.sol --bin --abi
```

## deploy to the chain
```
node deploy.js
```

## call this contract
```
node call.js
```

