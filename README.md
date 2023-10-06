# Back-end

## How to run

1. `npm install`
2. copy `.env.example` to `.env` and set `CONTRACT_ADDR` and `WEBSOCKET_URL`
3. `npm start`

contract is deployed on Sepolia testnet with address: `0xBD0D4206bb1F229dA79b493C2eb7C9DF9E1B4708`

## Endpoints

- /events -> get all emitted events
- /events/minted -> get all TokenMinted events
- /events/minted/collection/:collection -> get all TokenMinted events by collection address
- /events/collections -> get all CollectionCreated events
