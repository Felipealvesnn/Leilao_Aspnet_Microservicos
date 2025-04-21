import React from "react";
import { Auction } from "../types/auction";
import AuctionCard from "./AuctionCard";
import { PagedResult } from "../types";
//debugger;

async function getData(): Promise<PagedResult<Auction>> {
  const res = await fetch("http://localhost:7001/api/auctions?date=2024-12-18");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Listings() {
  const data = await getData();

  return (
    <div className="grid grid-cols-4 gap-6">
      {data.results.map((item) => (
        <AuctionCard key={item.id} auction={item} />
      ))}
    </div>
  );
}
