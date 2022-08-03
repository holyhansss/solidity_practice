const hre = require("hardhat");

async function main() {

    const StroeDataF = await hre.ethers.getContractFactory("StoreData");
    const storeData = await StroeDataF.deploy();

  await storeData.deployed();

  console.log("storeData deployed to:", storeData.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
