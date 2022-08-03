const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  before(async function () {
    [account0, account1] = await ethers.getSigners();

  });

  it("store Data", async function () {

    const StoreDataFac = await ethers.getContractFactory("StoreData", account0);
    const StoreData = await StoreDataFac.deploy();
    await StoreData.deployed();

    console.log("StoreData address: ", StoreData.address);

    await StoreData.connect(account0).setData(1000);

    const data = await StoreData.getData();

    expect(data).to.be.equal(1000);
  });

  it("send ETH", async function() {
    const sendETHFactory = await ethers.getContractFactory("SendETH", account0);
    const sendETH = await sendETHFactory.deploy(account0.address, account1.address, {value: 1});
    await sendETH.deployed();

    const balance = await ethers.provider.getBalance(sendETH.address);
    expect(balance).to.be.equal(1);

    console.log(await ethers.provider.getBalance(account0.address));
    
    await sendETH.withdrawETH(account0.address, 0.5)
  });

});
