import React from "react";
import Image from "next/image";
import { Auction } from "../types/auction";
import Countdowntime from "./Countdowntime";

type Props = {
  auction: Auction;
};

export default function AuctionCard({ auction }: Props) {
  return (
    <a href="#">
      <div className="relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden">
        <Image
          fill
          className="object-cover"
          src={auction.imageUrl}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 25vw"
          alt={`${auction.make} ${auction.model}`}
        />

        <div className="absolute bottom-2 left-2">
          <Countdowntime auctionEnd={auction.auctionEnd} />
        </div>
      </div>
      <div className=" flex justify-between items-center mt-4">
        <h3 className="text-gray-700">
          {auction.make} {auction.model}
        </h3>
        <p className="font-semibold text-sm"> ANO: {auction.year}</p>
      </div>
    </a>
  );
}
