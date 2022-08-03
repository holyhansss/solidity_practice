//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SendETH {

    address[2] owners;

    constructor(address owner0, address owner1) payable {
        owners[0] = owner0;
        owners[1] = owner1;
    }

    function withdrawETH(address _to, uint256 _amount) external payable {
        bool success;
        assembly {
            for {let i:= 0} lt(i, 2) { i := add(i, 1) } {
                // only for practice, not for mainnet!!!
                let owner := sload(i)
                if eq(_to, owner) {
                    success := call(gas(), _to, _amount, 0, 0, 0, 0)
                }
            }
        }
        require(success, "Failed to send ETH");
    }
}
