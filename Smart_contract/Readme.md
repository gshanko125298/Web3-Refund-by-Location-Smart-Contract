# The Solidity Contract-Oriented Programming Language
Solidity is a statically typed, contract-oriented, high-level language for implementing smart contracts on the Ethereum platform.

For a good overview and starting point, please check out the official Solidity Language Portal.
# Table of Contents
Build and Install
Example
Documentation
Development
Maintainers
License
# Background
Solidity is a statically-typed curly-braces programming language designed for developing smart contracts that run on the Ethereum Virtual Machine. Smart contracts are programs that are executed inside a peer-to-peer network where nobody has special authority over the execution, and thus they allow anyone to implement tokens of value, ownership, voting, and other kinds of logic.

When deploying contracts, you should use the latest released version of Solidity. This is because breaking changes, as well as new features and bug fixes, are introduced regularly. We currently use a 0.x version number to indicate this fast pace of change.
# Build and Install
Instructions about how to build and install the Solidity compiler can be found in the Solidity documentation.
# Example

A "Hello World" program in Solidity is of even less use than in other languages, but still:

        // SPDX-License-Identifier: MIT
        pragma solidity >=0.6.0 <0.9.0;

        contract HelloWorld {
            function helloWorld() external pure returns (string memory) {
                return "Hello, World!";
            }
        }

To get started with Solidity, you can use Remix, which is a browser-based IDE. Here are some example contracts: