const Web3 = require("web3");

// Loading the contract ABI
// (the results of a previous compilation step)
const fs = require("fs");
const { abi } = JSON.parse(fs.readFileSync("SimpleERC721Token.json"));

async function main() {
  // Configuring the connection to an Ethereum node
  const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    )
  );
  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY
  );
  web3.eth.accounts.wallet.add(signer);
  // Creating a Contract instance
  const contract = new web3.eth.Contract(
    abi,
    // Replace this with the address of your deployed contract
    process.env.DEMO_CONTRACT
  );
  // Issuing a transaction that calls the `echo` method
  let token_index = 0; // retrive the first token of owner
  const tx = contract.methods.tokenOfOwnerByIndex(signer.address,token_index)
  const receipt = await tx
    .call(function (err, res) {
      if (err) {
        console.log("An error occured", err)
        return
      }
      console.log(`The token id (index: ${token_index}) is: `, res)
    });
}

require("dotenv").config();
main();
