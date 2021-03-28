// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

// GCRToken on a vesting schedule.
import "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract GCRToken is ERC20PresetMinterPauser {
    uint256[3] public releaseTimes; // releaseTime 
    address public beneficiary; // vesting beneficiary
    
    // _amount = 40000000000 (mints 4M tokens right away)
    // _amount = 40000000000 (Invoke InitialRelease: mints 3M tokens)
    // _amount = 20000000000 (Invoke SecondRelease: mints 2M tokens)
    // _amount = 10000000000 (Invoke ThirdRelease: mints 1M tokens)

    constructor(
        uint256 _amount,
        address _vestingBeneficiary,
        uint256[3] memory _releaseTimes
    ) ERC20PresetMinterPauser('Global Coin Research', 'GCR') {
        beneficiary = _vestingBeneficiary;
        // releaseTime in seconds
        releaseTimes = [(block.timestamp + _releaseTimes[0]), (block.timestamp + _releaseTimes[1]), (block.timestamp + _releaseTimes[2])];
        _mint(_vestingBeneficiary, _amount);
    }
    
    /**
     * @notice Transfers tokens held by timelock to beneficiary.
     * Method adopted from TokenTimelock from OpenZepplin
     */
    function InitialRelease(uint256 _amount) public virtual {
        // solhint-disable-next-line not-rely-on-time
        require(block.timestamp >= releaseTimes[0], "Current time is before release time");
        _mint(beneficiary, _amount);
    }
    
    /**
     * @notice Transfers tokens held by timelock to beneficiary.
     * Method adopted from TokenTimelock from OpenZepplin
     */
    function SecondRelease(uint256 _amount) public virtual {
        // solhint-disable-next-line not-rely-on-time
        require(block.timestamp >= releaseTimes[1], "Current time is before release time");
        _mint(beneficiary, _amount);
    }
    
    /**
     * @notice Transfers tokens held by timelock to beneficiary.
     * Method adopted from TokenTimelock from OpenZepplin
     */
    function ThirdRelease(uint256 _amount) public virtual {
        // solhint-disable-next-line not-rely-on-time
        require(block.timestamp >= releaseTimes[2], "Current time is before release time");
        _mint(beneficiary, _amount);
    }
}