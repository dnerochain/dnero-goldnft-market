async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  //const Token = await ethers.getContractFactory("Token");
  //const token = await Token.deploy(
    //"Test Token",
    //"TT",
    //"1000000000000000000000000"
  //);

  //console.log("Token address:", token.address);

  const nftContract = await ethers.getContractFactory("DGNMCollection");
  const dGNMCollection = await nftContract.deploy("0xdf5c039871353c9317babd63eb426c727b6727dd","10"); //Need "CollectorsContract Address" And "10" for MinCost in the Constructor
  console.log("nftContract address:", dGNMCollection.address);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
