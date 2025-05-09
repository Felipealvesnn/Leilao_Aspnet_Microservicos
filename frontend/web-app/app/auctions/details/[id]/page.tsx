import React from "react";

// type props = {
//     id: string;
// };

export default function DEtails({ params }: { params: { id: string } }) {
  return <div>page for {params.id}</div>;
}
