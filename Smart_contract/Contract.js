
// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

import "hardhat/console.sol";
// This is the main building block for smart contracts.
contract Employe {
    string[2] location = ["0.00", "0.00"];
    //send the location cordinates
    function sendlocation(string memory _latitude, string memory _longitude)
        public
    {
        location[0] = _latitude;
        location[1] = _longitude;
    }
    //This function read the location cordinates 
    function readlocation()
        public
        view
        returns (string memory, string memory)
    {
        return (location[0], location[1]);
    }
}