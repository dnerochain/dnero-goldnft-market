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

  const marketContract = await ethers.getContractFactory("DGNMMarket");
  const dGNMMarket = await marketContract.deploy("0x5dee317aadde6597d6f955fa88da5492c69a7945"); //Need nftContract Address
  console.log("marketContract address:", dGNMMarket.address);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
