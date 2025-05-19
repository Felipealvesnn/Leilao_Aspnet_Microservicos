"use client";

import { Auction } from "@/app/types/auction";
import { Table, TableBody, TableHeadCell, TableRow } from "flowbite-react";

type Props = {
  auction: Auction;
};
export default function DetailedSpecs({ auction }: Props) {
  return (
    <Table striped={true}>
      <TableBody className="divide-y">
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Seller
          </TableHeadCell>
          <TableHeadCell>{auction.seller}</TableHeadCell>
        </TableRow>
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Make
          </TableHeadCell>
          <TableHeadCell>{auction.make}</TableHeadCell>
        </TableRow>
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Model
          </TableHeadCell>
          <TableHeadCell>{auction.model}</TableHeadCell>
        </TableRow>
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Year manufactured
          </TableHeadCell>
          <TableHeadCell>{auction.year}</TableHeadCell>
        </TableRow>
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Mileage
          </TableHeadCell>
          <TableHeadCell>{auction.mileage}</TableHeadCell>
        </TableRow>
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Has reserve price?
          </TableHeadCell>
          <TableHeadCell>
            {auction.reservePrice > 0 ? "Yes" : "No"}
          </TableHeadCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
