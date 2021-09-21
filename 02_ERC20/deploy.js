const Web3 = require("web3");

// Loading the contract ABI and Bytecode
// (the results of a previous compilation step)
const fs = require("fs");

async function main(prefix_fn) {
  // Configuring the connection to an Ethereum node
  const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    )
  );

  const { abi, bytecode } = JSON.parse(fs.readFileSync(prefix_fn + ".json"));

  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY
  );
  web3.eth.accounts.wallet.add(signer);

  // Using the signing account to deploy the contract
  const contract = new web3.eth.Contract(abi);
  contract.options.data = bytecode;
  const deployTx = contract.deploy({ arguments: [1000] });
  // ↑ Solidity constructor params, initial 50 token supply
  const deployedContract = await deployTx
    .send({
      from: signer.address,
      gas: 2000000,  // <-- increase gas fee to deploy this contract
    })
    .once("transactionHash", (txhash) => {
      console.log(`Mining deployment transaction ...`);
      console.log(`https://${network}.etherscan.io/tx/${txhash}`);
    });
  // The contract is now deployed on chain!
  console.log(`Contract deployed at ${deployedContract.options.address}`);
  console.log(
    `You can update DEMO_CONTRACT in .env to use the new contract address`
  );
}

require("dotenv").config();
main('SimpleERC20Token')
