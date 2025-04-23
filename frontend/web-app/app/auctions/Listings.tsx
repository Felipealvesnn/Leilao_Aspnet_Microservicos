"use client";
import React from "react";
import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { getData } from "../actions/auctionsActions";
import { Auction } from "../types/auction";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
//debugger;

export default function Listings() {
  const [auction, setAuctions] = React.useState<Auction[]>([]);
  const [pageCount, setPageCount] = React.useState(0);
  const [PageNumber, setPageNumber] = React.useState(1);

  React.useEffect(() => {
    getData(PageNumber).then((data) => {
      setAuctions(data.results);
      setPageCount(data.pageCount);
    });
  }, [PageNumber]);

  if (!auction || auction.length === 0) {
    return (
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} height={200} borderRadius={10} />
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {auction.map((item) => (
          <AuctionCard key={item.id} auction={item} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <AppPagination
          currentPage={PageNumber}
          pageCount={pageCount}
          pageChanged={setPageNumber}
        />
      </div>
    </>
  );
}
