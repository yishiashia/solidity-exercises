# Compile and deploy this contract

## generate .json, .abi and the binary bytecode of this contract
```
node ../compile.js SimpleToken
solcjs SimpleToken.sol --bin --abi
```

## deploy to the chain
```
node deploy.js
```

## check remain tokens on the owner account
```
node check_balance.js
```

## transfer token from owner's address to target address
```
node transfer.js
```

