"use client";
import React from "react";
import Image from "next/image";
import { Auction } from "../types/auction";

type Props = {
  auction: Auction;
};

export default function CarImage({ auction }: Props) {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <Image
      fill
      className={`
        object-cover group-hover:opacity-75 duration-700 ease-in-out
        ${
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        }
    `}
      src={auction.imageUrl}
      priority
      onLoad={() => setIsLoading(false)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 25vw"
      alt={`${auction.make} ${auction.model}`}
    />
  );
}
