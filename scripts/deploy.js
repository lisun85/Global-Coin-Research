// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const releaseTimes = [10, 15, 20]; // Release times in seconds
const vestingBeneficiary = '0x8df737904ab678B99717EF553b4eFdA6E3f94589';
const amount = 40000000000;

async function main() {
  console.log('Deploying $GCR Token...')
  const GCRToken = await hre.ethers.getContractFactory("GCRToken");
  const gcrtoken = await GCRToken.deploy(amount, vestingBeneficiary, releaseTimes);

  await gcrtoken.deployed();

  console.log("$GCR Token deployed to:", gcrtoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
