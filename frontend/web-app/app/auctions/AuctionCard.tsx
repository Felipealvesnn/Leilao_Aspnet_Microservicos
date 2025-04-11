import React from 'react'
import { Auction } from '../types/auction'



type Props = {
  auction: Auction;
};

export default function AuctionCard({ auction }: Props) {
  return (
    <div className="flex mb-2 flex-col gap-2 p-5 bg-gray-200 rounded-md">
      <h1 className="text-2xl font-bold">{auction.make} {auction.model} ({auction.year})</h1>
      <p>{auction.color} - {auction.mileage} km</p>
      <img src={auction.imageUrl} alt={`${auction.make} ${auction.model}`} className="w-64 h-auto rounded-md" />
      <p className="text-gray-500">Status: {auction.status}</p>
    </div>
  )
}
