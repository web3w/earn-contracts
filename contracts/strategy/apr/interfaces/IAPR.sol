// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IAPR  {
    function name() external view returns (string memory);
 
    function getLpToken(address token) external view returns (address);

    function getAPR(address token) external view returns (uint256);
    // 调整收益率 - 可操作的量
    function getAPRAdjusted(address token, uint256 _supply) external view returns (uint256);
}
