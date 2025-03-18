/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";

function CarsList(props: any) {
  const [selectedCar, setSelectedCar] = useState<any>([]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {props.carsLists?.map((car: any, idx: number) => (
        <div
          key={idx}
          onClick={() => {
            const modal = document.getElementById("book_car_modal");
            setSelectedCar(car);
            if (modal) {
              (modal as HTMLDialogElement).showModal();
            }
          }}
        >
          <CarCard car={car} />
        </div>
      ))}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="book_car_modal" className="modal">
        <BookingModal car = {selectedCar} />
      </dialog>
    </div>
  );
}

export default CarsList;
