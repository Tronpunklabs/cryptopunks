var ConvertLib = artifacts.require("./ConvertLib.sol");
var TronPunks = artifacts.require("./TronPunks.sol");
var TronPunksMarket = artifacts.require("./TronPunksMarket.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, TronPunks);
  deployer.deploy(TronPunks);
  deployer.deploy(TronPunksMarket);
};
