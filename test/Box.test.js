const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Box", () => {
  let Box;
  let box;
  let owner, user;

  before(async () => {
    Box = await ethers.getContractFactory("Box");
    [owner, user] = await ethers.getSigners();
  });

  beforeEach(async () => {
    box = await Box.deploy();
  });

  it("retrieve returns a value previously stored", async () => {
    await box.store(42);
    expect((await box.retrieve()).toString()).to.equal("42");
  });

  it("store emit an event", async () => {
    expect(await box.store("42"))
      .to.emit(box, "ValueChanged")
      .withArgs("42");
  });

  it("non owner cannot store a value", async () => {
    await expect(box.connect(user).store("42")).to.be.reverted;
  });
});
