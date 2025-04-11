export interface Auction {
    id: string;
    reservePrice: number;
    seller: string;
    winner: string | null;
    soldAmount: number | null;
    currentHighBid: number | null;
    createdAt: string;
    updatedAt: string;
    auctionEnd: string;
    status: string;
    make: string;
    model: string;
    year: number;
    color: string;
    mileage: number;
    imageUrl: string;
  }
  