import React, { useState } from "react";
import Seat from "./Seats";
import BookingModal from "./BookingModal";
import { seatsData } from "../data/seatsData";

export default function SeatMatrixLayout() {
  // Seats stored in state
  const [seats, setSeats] = useState(seatsData);

  // Determine if logged-in user is owner
  const isOwner = localStorage.getItem("role") === "owner";

  // Booking modal control
  const [selectedSeatId, setSelectedSeatId] = useState(null);

  // Handle seat click
  const handleSeatClick = (seatId) => {
    const seat = seats.find((s) => s.id === seatId);

    if (!seat) return;

    if (seat.status === "booked" && !isOwner) {
      alert(`Seat ${seatId} is already booked.`);
      return;
    }

    // Owner can edit/edit booking (future)
    // Student can only book available seats
    setSelectedSeatId(seatId);
  };

  // Confirm booking
  const handleConfirmBooking = (ownerData) => {
    setSeats((prev) =>
      prev.map((seat) =>
        seat.id === selectedSeatId
          ? {
              ...seat,
              status: "booked",
              owner: { ...ownerData },
            }
          : seat
      )
    );

    setSelectedSeatId(null);
  };

  // Group seats by rows A–G
  const rows = {
    A: seats.filter((s) => s.id.startsWith("A")),
    B: seats.filter((s) => s.id.startsWith("B")),
    C: seats.filter((s) => s.id.startsWith("C")),
    D: seats.filter((s) => s.id.startsWith("D")),
    E: seats.filter((s) => s.id.startsWith("E")),
    F: seats.filter((s) => s.id.startsWith("F")),
    G: seats.filter((s) => s.id.startsWith("G")),
  };

  return (
    <div className="library-container my-10">

      {/* TOP INFO BLOCKS */}
      <div className="flex gap-10 justify-center mb-10">

        <div className="w-[140px] h-[120px] rounded-xl bg-blue-100 text-blue-800 
                        border border-blue-300 shadow flex items-center justify-center">
          🚺 Girls Toilet
        </div>

        <div className="w-[140px] h-[120px] rounded-xl bg-blue-100 text-blue-800 
                        border border-blue-300 shadow flex items-center justify-center">
          🚹 Boys Toilet
        </div>

        <div className="w-[140px] h-[120px] rounded-xl bg-teal-100 text-teal-800
                        border border-teal-300 shadow flex items-center justify-center">
          💧 Drinking Water
        </div>

        <div className="w-[140px] h-[120px] rounded-xl bg-yellow-100 text-yellow-800
                        border border-yellow-300 shadow flex items-center justify-center">
          💬 Discussion Room
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="flex justify-center gap-16">

        {Object.entries(rows).map(([rowName, seatList]) => (
          <div key={rowName} className="flex flex-col items-center">

            <div className="text-xl font-bold mb-4 text-slate-700">{rowName}</div>

            <div className="flex flex-col items-center gap-5">
              {seatList.map((seat, index) => (
                <React.Fragment key={seat.id}>

                  <Seat seat={seat} isOwner={isOwner} onClick={handleSeatClick} />

                  {/* Walkway divider between seats */}
                  {index !== seatList.length - 1 && (
                    <div className="w-full flex justify-center">
                      <div className="h-[32px] border-l-2 border-dashed border-slate-300"></div>
                    </div>
                  )}

                </React.Fragment>
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* BOOKING MODAL */}
      {selectedSeatId && (
        <BookingModal
          seatId={selectedSeatId}
          onClose={() => setSelectedSeatId(null)}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
}
