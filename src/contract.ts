import "dotenv/config";
import { Contract, WebSocketProvider } from "ethers";
import NFTCollectionFactoryABI from "../abis/NFTCollectionFactoryABI.json";
import { createdCollectionLogs, mintLogs } from "./data";

const websocketUrl = process.env.WEBSOCKET_URL;
const contractAddr = process.env.CONTRACT_ADDR;

if (!websocketUrl) {
  throw new Error("Websocket url is not set!");
}

if (!contractAddr) {
  throw new Error("Contract address is not set!");
}

const provider = new WebSocketProvider(websocketUrl);

// Create a contract; connected to a Provider, so it may
// only access read-only methods (like view and pure)
export const contract = new Contract(
  contractAddr,
  NFTCollectionFactoryABI,
  provider
);

export const handleTokenMinted = (
  collection: string,
  recipient: string,
  tokenId: bigint,
  tokenURI: string
) => {
  const mintLog = {
    collection,
    recipient,
    tokenId: tokenId.toString(),
    tokenURI,
  };
  console.log("Event -> TokenMinted:\n", mintLog, "\n");
  mintLogs.push(mintLog);
};

export const handleCollectionCreated = (
  collection: string,
  name: string,
  symbol: string
) => {
  const createdCollectionLog = { collection, name, symbol };
  console.log("Event -> CollectionCreated:\n", createdCollectionLog, "\n");
  createdCollectionLogs.push(createdCollectionLog);
};
