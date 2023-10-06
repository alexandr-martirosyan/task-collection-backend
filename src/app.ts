import express from "express";
import {
  contract,
  handleCollectionCreated,
  handleTokenMinted,
} from "./contract";
import { getAllEvents, getCreationEvents, getMintEvents, getMintedByCollection } from "./routers";

const app = express();
const port = 3000;

app.get("/events", getAllEvents);
app.get("/events/minted", getMintEvents);
app.get("/events/minted/collection/:collection", getMintedByCollection);
app.get("/events/collections", getCreationEvents);

app.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});

/* events */

// event TokenMinted(address indexed collection, address indexed recipient, uint256 indexed tokenId, string tokenURI);
contract.on("TokenMinted", handleTokenMinted);

// event CollectionCreated(address indexed collection, string name, string symbol);
contract.on("CollectionCreated", handleCollectionCreated);
