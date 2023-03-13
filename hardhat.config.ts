import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",

  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.GOERLI_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 5,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.MUMBAI_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 80001
    }
  },

  etherscan: {
    apiKey: `${process.env.API_KEY}`
  }
};

export default config;
