pragma solidity ^0.8.7;

contract SimpleToken{

	address owner;
	uint public totalSupply;
    mapping(address => uint) balances;

    constructor(uint _initialSupply) {
        totalSupply = _initialSupply;
        owner = msg.sender;
        balances[owner] = totalSupply;
    }

    function balanceOf(address _someone) public view returns (uint) {
    	return balances[_someone];
    }

    function transfer(address _to,uint _value) public returns (bool) {
        require(_value > 0);
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        return true;
    }
}
