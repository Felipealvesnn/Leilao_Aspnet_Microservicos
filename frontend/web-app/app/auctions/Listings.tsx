import React from 'react'
//debugger;

async function getData() {
    const res = await fetch('http://localhost:7001/api/auctions?date=2024-12-18')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Listings() {
    const data = await getData()
  return (
    <div>
      {
        data.map((item: any) => (
          <div key={item.id} className="flex flex-col gap-2 p-5 bg-gray-200 rounded-md">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p>{item.description}</p>
            <p className="text-gray-500">{item.date}</p>
          </div>
        ))
      }
    </div>
  )
}
