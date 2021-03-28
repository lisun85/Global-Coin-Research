require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/1aaea54466314e78a920d7f41a211fbb",
      chainId: 1,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : "remote",
      gasPrice: 90000000000,
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/1aaea54466314e78a920d7f41a211fbb",
      chainId: 3,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : "remote"
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/1aaea54466314e78a920d7f41a211fbb",
      chainId: 4,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : "remote"
    },
    kovan: {
      url: "https://kovan.infura.io/v3/1aaea54466314e78a920d7f41a211fbb",
      chainId: 42,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : "remote"
    },
    goerli: {
      url: "https://goerli.prylabs.net",
      chainId: 5,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : "remote",
    },
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      chainId: 80001,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : "remote"
    },
    matic: {
      url: "https://rpc-mainnet.matic.network",
      chainId: 137,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : "remote"
    }

  },
  solidity: "0.7.3",
};