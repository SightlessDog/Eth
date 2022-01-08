import "@nomiclabs/hardhat-ethers";
import {ethers} from "hardhat";
import {expect} from "chai"; 

describe("hello world", function () {
    it ("should say hi", async function() {
        // 1. setup done
        // 2. Deploy the contract 
        // Get the contract factory with the **name** of the contract not the file
        const HelloWorld = await ethers.getContractFactory("HelloWorld"); 
        const hello = await HelloWorld.deploy(); 
        await hello.deployed();
        // 3. Call the function to test
        expect(await hello.hello()).to.equal("Hello, World")
    });
});
