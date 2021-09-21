pragma solidity ^0.8.7;

//import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol';
import './openzeppelin-contracts/contracts/token/ERC20/ERC20.sol';

contract SimpleERC20Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("Simple", "SP") {
        _mint(msg.sender, initialSupply);
    }
}
