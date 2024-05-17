// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./Auth.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 private _value;
    // Auth private _auth;

    event ValueChanged(uint256 value);

    // constructor() {
    //     _auth = new Auth(msg.sender);
    // }
    constructor() Ownable(msg.sender) {}

    function store(uint256 value) public onlyOwner {
        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }
}