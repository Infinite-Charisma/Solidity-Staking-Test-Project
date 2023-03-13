import { ethers } from "hardhat";

async function main() {
  // const RewardToken = await ethers.getContractFactory("RewardToken");
  // const rewardToken = await RewardToken.deploy(10000);

  // await rewardToken.deployed();

  // console.log(
  //   `RewardToken Contract deployed to ${rewardToken.address}`
  // );

  const _rewardTokenAddress = "0x76045CF438C318F7a541CD57e6C7991ADB9215be";
  const _nftContractAddress = "0xaFD3903C9bC887ed76f025674927c20FE05ead1C";
  const _stakingVault = "0x9406aCF779A630a1451De816a957DA9322478A48";

  const StakingContract = await ethers.getContractFactory("Staking");
  const stakingContract = await StakingContract.deploy(_rewardTokenAddress, _nftContractAddress, _stakingVault);

  await stakingContract.deployed();

  console.log(
    `Staking Contract deployed to ${stakingContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
