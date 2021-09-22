pragma solidity ^0.8.7;

//import "../node_modules/@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";
import "./openzeppelin-contracts/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract SmileFace is ERC721PresetMinterPauserAutoId {
    constructor() ERC721PresetMinterPauserAutoId("Smile Face", "SmileFace", <YOUR_TOKEN_BASE_URI>) {
    }

    // This allows the minter to update the tokenURI after it's been minted.
    // To disable this, delete this function.
    function setTokenURI(uint256 tokenId, string memory tokenURI) public {
        require(hasRole(MINTER_ROLE, _msgSender()), "web3 CLI: must have minter role to update tokenURI");
        setTokenURI(tokenId, tokenURI);
    }
}
