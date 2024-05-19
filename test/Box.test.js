const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Box", () => {
  let Box;
  let box;

  before(async () => {
    Box = await ethers.getContractFactory("Box");
  });

  beforeEach(async () => {
    box = await Box.deploy();
  });

  it("retrieve returns a value previously stored", async () => {
    await box.store(42);
    expect((await box.retrieve()).toString()).to.equal("42");
  });
});
