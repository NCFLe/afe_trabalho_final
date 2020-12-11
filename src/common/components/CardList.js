import React from "react";
import { InformationCard } from "./InformationCard";

export const CardList = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((m) => (
          <InformationCard key={m.id} data={m}/>
        ))}
      </ul>
    </>
  );
};
