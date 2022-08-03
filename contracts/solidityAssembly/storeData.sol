pragma solidity ^0.8.0;

contract StoreData {
    function setData(uint256 newValue) public {
        assembly {
            sstore(0, newValue)
        }
    }
    function getData() public view returns(uint256) {
        assembly {
            let v := sload(0)
            mstore(0x80, v)
            return(0x80, 32)
        }
    }
}