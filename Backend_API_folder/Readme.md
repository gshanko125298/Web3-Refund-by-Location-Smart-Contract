# ABI 
The Application Binary Interface (ABI) of a smart contract gives a contract the ability to communicate and interact with external
applications and other smart contracts. Receiving data from external sources can be critical for completing the goals of the application and
the user.In traditional web development, conversations about data happen between applications and servers through API's (Application Program Interface). 
Servers act as centralized sources of information that feed data to application by request. On a blockchain, no such centralization of data exists. 
Nodes essentially act as servers and smart contracts are on chain "hosted" functions.  Applications outside of the blockchain 
(and other smart contracts) need a way to communicate with smart contracts that are on-chain.This is where ABI comes into play. 

# Why ABI?
Before going into more details about what ABI is, it is good to understand why we have it.Smart contracts are the core applications of the
EVM (Ethereum Virtual Machine). The purpose of smart contracts is to execute transactions when certain conditions defined in the contract are met. 
These conditions can be events both on or off-chain. Smart contracts are written in high-level languages like Solidity but they are stored on the EVM  as executable bytecode,
which is in binary format
# How to use ABI?
Generation: If you are using tooling like Hardhart/Truffle or an IDE like Remix, the contract ABI is automatically generated for you.
You can also manually create the ABI by using the Solidity Compiler NPM package. After installing the package, you can run the ‘solcjs contractname.sol --abi’ command in a terminal. 
This will generate an .abi file if performed successfully. 
