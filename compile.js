const fs = require('fs').promises;
const solc = require('solc');

async function main(prefix_fn) {
  // Load the contract source code
  const sourceCode = await fs.readFile(prefix_fn + ".sol", 'utf8');
  // Compile the source code and retrieve the ABI and bytecode
  const { abi, bytecode } = compile(sourceCode, prefix_fn);
  // Store the ABI and bytecode into a JSON file
  const artifact = JSON.stringify({ abi, bytecode }, null, 2);
  await fs.writeFile(prefix_fn + '.json', artifact);
}

function compile(sourceCode, contractName) {
  // Create the Solidity Compiler Standard Input and Output JSON
  const input = {
    language: 'Solidity',
    sources: { main: { content: sourceCode } },
    settings: { outputSelection: { '*': { '*': ['abi', 'evm.bytecode'] } } },
  };
  // Parse the compiler output to retrieve the ABI and bytecode
  const output = solc.compile(JSON.stringify(input));
  const artifact = JSON.parse(output).contracts.main[contractName];
  return {
    abi: artifact.abi,
    bytecode: artifact.evm.bytecode.object,
  };
}

if( Array.isArray(process.argv) && process.argv.length > 2 ) {
  main(process.argv[2]).then(() => process.exit(0));
} else {
  console.log("Not specify solidity file")
  process.exit()
}
