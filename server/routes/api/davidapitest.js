const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Web3 } = require("web3");
const abi = require("../../config/abi.json")

// David's testApi - Infura
router.get('/', async (req, res) => {
    try {
        const url = process.env.INFURA_URL;

        const requestData = {
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: [],
            id: 1
        };

        const response = await axios.post(url, requestData);

        console.log('Response:', response.data);

        res.json(response.data);
    } catch (err) {
        console.error('Error:', err);
        res.status(400).json({ error: err.message });
    }
});

router.get('/getItemDetails', async (req, res) => {

    try {
        const infuraUrl = process.env.INFURA_URL;

        const web3 = new Web3(
            new Web3.providers.HttpProvider(
                infuraUrl,
            ),
        );
    
        const contract = new web3.eth.Contract(
            abi,
            process.env.CONTRACT,
        );
    
        // Getting the weapon detail id of 1.
        const response = await contract.methods.getItemDetails(1).call();
        const serializedResponse = JSON.parse(
            JSON.stringify(response, (key, value) =>
                typeof value === 'bigint' ? value.toString() : value
            )
        );

        console.log("Response: ", serializedResponse);

        res.json(serializedResponse);
    } catch (err){
        console.error('Error:', err);
        res.status(400).json({ error: err.message });
    }
    
})

module.exports = router;
