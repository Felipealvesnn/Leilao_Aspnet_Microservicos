"use server";
// import { env } from "process";
import { PagedResult } from "../types";
import { Auction } from "../types/auction";
import { fetchWrapper } from "../lib/fetchWrapper";

export async function getData(query: string): Promise<PagedResult<Auction>> {
  //const res = await fetch("http://localhost:7001/api/auctions?date=2024-12-18");
  return await fetchWrapper.get(`/api/search${query}`);
}

export async function updateAuctionTest() {
    const data = {
        mileage: Math.floor(Math.random() * 10000) + 1
    }

    return await fetchWrapper.put('/api/auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c', data);
}

