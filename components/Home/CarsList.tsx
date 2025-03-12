/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CarCard from "./CarCard";

function CarsList(props: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {props.carsLists?.map((car: any, idx: number) => (
        <div key={idx}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}

export default CarsList;
