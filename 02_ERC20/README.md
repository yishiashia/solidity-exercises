# Compile and deploy this contract

To generate .json, .abi and the binary bytecode of this contract,
we first clone the OpenZeppelin contracts into current folder, and
then run `solcjs` command to compile abi and bytecode.

```
git clone https://github.com/OpenZeppelin/openzeppelin-contracts.git

solcjs SimpleToken.sol --bin --abi  --base-path .
```

After the abi and bytecode was generated, then manually concat the `.abi`
and `.bin` files into the `.json` file.

## deploy to the chain
```
node deploy.js
```

## check remain tokens on the owner account
```
node check_balance.js
```

