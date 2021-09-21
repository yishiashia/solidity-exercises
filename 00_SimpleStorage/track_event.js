const Web3 = require("web3");

const fs = require("fs");
const { abi } = JSON.parse(fs.readFileSync("SimpleStorage.json"));

async function main() {
  // Configuring the connection to an Ethereum node
  const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(`wss://${network}.infura.io/ws/v3/${process.env.INFURA_PROJECT_ID}`);

  // Creating a Contract instance
  const contract = new web3.eth.Contract(
    abi,
    // Replace this with the address of your deployed contract
    process.env.DEMO_CONTRACT
  );

  contract.events.allEvents({
    fromBlock: 0
  }, (error, event) => {
    console.log(event);
  }).on('data', (event) => {
    console.log(event);
  }).on('changed', (event) => {
    console.log(event);
  }).on('error', (error) => {
    console.error(error);
  });

  let events = await contract.getPastEvents('Set', {fromBlock: 0});
}

require("dotenv").config();
main();
