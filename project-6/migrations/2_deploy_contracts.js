// migrating the appropriate contracts
var WorkshopRole = artifacts.require("./WorkshopRole.sol");
var RetailerRole = artifacts.require("./RetailerRole.sol");
var CustomerRole = artifacts.require("./CustomerRole.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(WorkshopRole);
  deployer.deploy(RetailerRole);
  deployer.deploy(CustomerRole);
  deployer.deploy(SupplyChain);
};
