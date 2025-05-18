"use client";
import React, { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { getData } from "../actions/auctionsActions";
import { Auction } from "../types/auction";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Filters from "./Filters";
import { useParamsStore } from "@/hooks/useParamsStore";
import { useShallow } from "zustand/react/shallow";
import qs from "query-string";
import EmptyFilter from "../components/EmptyFilter";
// ← aqui você importa a store

export default function Listings() {
  const [loading, setLoading] = useState(true);
  const [auction, setAuctions] = React.useState<Auction[]>([]);
  const seache = useParamsStore((state) => {
    return state.setParams;
  });
  const params = useParamsStore(
    useShallow((state) => ({
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      searchTerm: state.searchTerm,
      pageCount: state.pageCount,
      orderBy: state.orderBy,
      filterBy: state.filterBy,
      seller: state.seller,
      winner: state.winner,
    }))
  );
  const url = qs.stringifyUrl(
    {
      url: "",
      query: params,
    },
    { skipNull: true }
  );

  useEffect(() => {
    getData(url).then((data) => {
      //  debugger;
      setAuctions(data.results);
      seache({ pageCount: data.pageCount });
      setLoading(false);
    });
  }, [url]);

  if (loading)
    return (
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} height={200} borderRadius={10} />
        ))}
      </div>
    );

  if (!auction || auction.length === 0) {
    return (
      <>
        <Filters />
        <EmptyFilter showReset />
      </>
    );
  }

  return (
    <>
      <Filters />
      <div className="grid grid-cols-4 gap-6">
        {auction.map((item) => (
          <AuctionCard key={item.id} auction={item} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <AppPagination
          currentPage={params.pageNumber}
          pageCount={params.pageCount}
          pageChanged={(num) => seache({ pageNumber: num })}
        />
      </div>
    </>
  );
}
