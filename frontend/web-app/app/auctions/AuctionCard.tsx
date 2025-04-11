import React from "react";
import Image from "next/image";
import { Auction } from "../types/auction";

type Props = {
  auction: Auction;
};

export default function AuctionCard({ auction }: Props) {
  return (
    <a href="#">
      <div className="relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden">
        <h1 className="text-2xl font-bold">
          {auction.make} {auction.model} ({auction.year})
        </h1>
        <p>
          {auction.color} - {auction.mileage} km
        </p>
        <Image
          fill
          className="object-cover"
          src={auction.imageUrl}
          alt={`${auction.make} ${auction.model}`}
        />

        <p className="text-gray-500">Status: {auction.status}</p>
      </div>
    </a>
  );
}
