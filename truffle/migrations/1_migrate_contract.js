var auction = artifacts.require("Auction");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(auction);
};