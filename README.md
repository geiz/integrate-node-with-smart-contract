# Getting Started

## This project was provided to me as a test, there are some unused bloat packages.

1. yarn
2. create .env and put your infura key here
3. `node test.js` to run a single call to the blockchain smart contract on blast.
4. `node server.js` to run the server. Then call endpoints `localhost:2001/api/davidapitest/` and `localhost:2001/api/davidapitest/getItemDetails`. They should be working 

`localhost:2001/api/davidapitest/` is a base infura interation, it should yield
{"jsonrpc":"2.0","id":1,"result":"0x7bca2b"}


`localhost:2001/api/davidapitest/getItemDetails` interacts with a mainnet blastscan.io contract. It should yield 
{"0":"Rudger L1 Rifle","1":"A simple rifle created by Rudger Industries. Cheap and reliable.","2":"16","3":"3","4":"0","5":"20","6":"165000","7":"Rifle","8":"https://ipfs.io/ipfs/QmZoqm6rFUD3Yv1yyUcjdi1weM9tTaTtiNqTkzVYKpB7d2/1.png","9":"Basic","__length__":10,"name":"Rudger L1 Rifle","description":"A simple rifle created by Rudger Industries. Cheap and reliable.","damage":"16","attackSpeed":"3","durability":"0","durabilityPerUse":"20","maxDurability":"165000","weaponType":"Rifle","imageUrl":"https://ipfs.io/ipfs/QmZoqm6rFUD3Yv1yyUcjdi1weM9tTaTtiNqTkzVYKpB7d2/1.png","rarity":"Basic"}