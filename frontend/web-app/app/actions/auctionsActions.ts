"use server";
import { env } from "process";
import { auth } from "@/auth";
import { PagedResult } from "../types";
import { Auction } from "../types/auction";

export async function getData(query: string): Promise<PagedResult<Auction>> {
  //const res = await fetch("http://localhost:7001/api/auctions?date=2024-12-18");

  const res = await fetch(`${env.SEARCH_URL_INTERNAL}/api/search${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function updateAuctionTest() {
  const data = {
    mileage: Math.floor(Math.random() * 10000) + 1,
  };

  // monta os headers já aguardando a promise
  const headers = await getHeaders();

  const res = await fetch("http://localhost:7001/auctions", {
    method: "PUT",
    headers, // agora um objeto, não Promise
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return { status: res.status, message: res.statusText };
  }

  return res.json();
}

async function getHeaders(): Promise<Record<string, string>> {
  const session = await auth(); // pega sessão/autenticação

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    // se quiser aceitar JSON de volta:
    Accept: "application/json",
  };

  if (session?.accessToken) {
    headers.Authorization = `Bearer ${session.accessToken}`;
  }

  return headers;
}
