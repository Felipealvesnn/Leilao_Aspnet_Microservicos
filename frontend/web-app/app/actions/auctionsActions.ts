"use server";
import { PagedResult } from "../types";
import { Auction } from "../types/auction";

export async function getData(query: string): Promise<PagedResult<Auction>> {
  //const res = await fetch("http://localhost:7001/api/auctions?date=2024-12-18");

  const res = await fetch(`http://localhost:7002/api/search${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function updateAuctionTest() {
  const data = {
    // dados aqui
  };

  const res = await fetch('http://localhost:7001/auctions', {
    method: 'PUT',
    headers: {},
    body: JSON.stringify(data),
  });

  if (!res.ok) return { status: res.status, message: res.statusText };

  return res.json();
}

