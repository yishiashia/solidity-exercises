# :construction: Under Construction :construction:

## Compile and deploy this contract

To generate .json, .abi and the binary bytecode of this contract,
we first clone the OpenZeppelin contracts into current folder, and
then run `solcjs` command to compile abi and bytecode.

```
git clone https://github.com/OpenZeppelin/openzeppelin-contracts.git

solcjs SimpleERC20Token.sol --bin --abi  --base-path .
```

After the abi and bytecode was generated, then manually concat the `.abi`
and `.bin` files into the `.json` file.

## Deploy to the chain
```
node deploy.js
```

## Mint an NFT
```
node mint.js
```

## Interact with the smart contract

### 1. Get the metadata of NFT
```
node get_token_uri.js
```

### 2. Get the Token count of a specified owner
```
node check_balance.js
```

### 3. Get the token id of owner with index
```
node owner_token_id.js
```

### 4. Get the owner address of the specified token
```
node check_owner.js
```
