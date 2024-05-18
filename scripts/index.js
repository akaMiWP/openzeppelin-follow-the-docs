// const { ethers } = require("hardhat");

const { ethers } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();
  console.log(signers);

  const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const Box = await ethers.getContractFactory("Box");
  const box = Box.attach(address);

  let value = await box.retrieve();
  console.log("Box value is", value.toString());

  await box.store(23);
  value = await box.retrieve();
  console.log("Box value is", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
