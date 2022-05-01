require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString()
const projectId ="cf738b15ff4c4754a718a5705b47a659"

module.exports = {
  solidity: "0.8.4",
  networks :{
    hardhat: {
      chainId: 1337
    },
    mumbai: { 
      url:  `https://polygon-mumbai.infura.io/v3/${projectId}`,
      account :[privateKey]
    },
  }
};
