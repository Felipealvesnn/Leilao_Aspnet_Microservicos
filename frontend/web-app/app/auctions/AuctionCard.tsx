import React from "react";
import { Auction } from "../types/auction";
import Countdowntime from "./Countdowntime";
import CarImage from "./CarImage";

type Props = {
  auction: Auction;
};

export default function AuctionCard({ auction }: Props) {
  return (
    <a href="#">
      <div className="relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden">
        <CarImage auction={auction} />

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
