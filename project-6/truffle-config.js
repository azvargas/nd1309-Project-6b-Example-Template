const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "024c6c8b1ced452f86e17c8941fcd8b1";
//
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",       // Match any network id
      websockets: true
    },

    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      websockets: true
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    }
    
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0"    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};