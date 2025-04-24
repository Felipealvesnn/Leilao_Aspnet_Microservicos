"use client";
import React, { useEffect } from "react";
import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { getData } from "../actions/auctionsActions";
import { Auction } from "../types/auction";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Filters from "./Filters";
import { useParamsStore } from "@/hooks/useParamsStore";
//import { shallow } from "zustand/shallow";
// ← aqui você importa a store

export default function Listings() {
  const [auction, setAuctions] = React.useState<Auction[]>([]);
  const params = useParamsStore(state => ({
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
    pageCount: state.pageCount,
    searchTerm: state.searchTerm,
    setParams: state.setParams,
  }));

  useEffect(() => {
    getData(params.pageNumber, params.pageSize).then((data) => {
      setAuctions(data.results);
      params.setParams({ pageCount: data.pageCount });
    });
  }, [params.pageNumber, params.pageSize]);

  if (!auction || auction.length === 0) {
    return (
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} height={200} borderRadius={10} />
        ))}
      </div>
    );
  }

  return (
    <>
      <Filters
        pageSize={params.pageSize}
        setPageSize={(size) => params.setParams({ pageSize: size })}
      />
      <div className="grid grid-cols-4 gap-6">
        {auction.map((item) => (
          <AuctionCard key={item.id} auction={item} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <AppPagination
          currentPage={params.pageNumber}
          pageCount={params.pageCount}
          pageChanged={(num) => params.setParams({ pageNumber: num })}
        />
      </div>
    </>
  );
}
