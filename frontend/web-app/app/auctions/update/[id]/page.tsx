import React from "react";

type props = {
  id: string;
};

export default function Update(params: props) {
  return <div>page for {params.id}</div>;
}
