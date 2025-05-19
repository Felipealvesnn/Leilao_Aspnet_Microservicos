/* eslint-disable @typescript-eslint/no-unused-vars */
import { getDetailedViewData } from "@/app/actions/auctionsActions";
import { getCurrentUser } from "@/app/actions/authActions";
import React from "react";
import CarImage from "../../CarImage";
import Heading from "@/app/components/Heading";
import Countdowntime from "../../Countdowntime";
import DetailedSpecs from "./DetailedSpecs";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

// type props = {
//     id: string;
// };

export default async function Details({ params }: { params: { id: string } }) {
     const data = await getDetailedViewData(params.id);
    const user = await getCurrentUser();
    
   return (
        <div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <Heading title={`${data.make} ${data.model}`} />
                    {user?.username === data.seller && (
                        <>
                            <EditButton id={data.id} />
                            <DeleteButton id={data.id} />
                        </>

                    )}
                </div>

                <div className='flex gap-3'>
                    <h3 className='text-2xl font-semibold'>Time remaining:</h3>
                    <Countdowntime auctionEnd={data.auctionEnd} />
                </div>
            </div>

            <div className='grid grid-cols-2 gap-6 mt-3'>
                <div className='w-full bg-gray-200 relative aspect-[4/3] rounded-lg overflow-hidden'>
                    <CarImage auction={data} />
                </div>

                {/* <BidList user={user} auction={data} /> */}
            </div>

            <div className='mt-3 grid grid-cols-1 rounded-lg'>
                <DetailedSpecs auction={data} />
            </div>

        </div>
    )
}
