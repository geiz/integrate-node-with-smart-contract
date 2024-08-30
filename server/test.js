const { Web3 } = require("web3");
const abi = require("./config/abi.json")

// Little test function.
async function getItemDetails() {
  const infuraUrl = process.env.INFURA_URL;

  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      infuraUrl,
    ),
  );

  // Creating a Contract instance
  const contract = new web3.eth.Contract(
    abi,
    // Replace this with the address of your deployed contract
    process.env.CONTRACT,
  );

  // Issuing a transaction to get item details
  const response = await contract.methods.getItemDetails(1).call();
  console.log("Response: ", response);
  // The transaction is now on chain!



}

require("dotenv").config();
getItemDetails();