interface ITokenMinted {
  collection: string;
  recipient: string;
  tokenId: string;
  tokenURI: string;
}

interface ICollectionCreated {
  collection: string;
  name: string;
  symbol: string;
}

export const mintLogs: ITokenMinted[] = []

export const createdCollectionLogs: ICollectionCreated[] = []