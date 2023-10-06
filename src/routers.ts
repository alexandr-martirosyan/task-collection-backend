import { Request, Response } from "express";
import { createdCollectionLogs, mintLogs } from "./data";

export const getMintEvents = (req: Request, res: Response) => {
  res.json(mintLogs);
};

export const getCreationEvents = (req: Request, res: Response) => {
  res.json(createdCollectionLogs);
};

export const getAllEvents = (req: Request, res: Response) => {
  const allEvents = {
    mintLogs,
    createdCollectionLogs,
  };
  res.json(allEvents);
};

export const getMintedByCollection = (req: Request, res: Response) => {
  const filteredLogs = mintLogs.filter(lg => lg.collection === req.params.collection);
  res.json(filteredLogs);
}