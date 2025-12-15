import { useState } from "react";
import { seatsData } from "../data/seatsData";
import SeatMatrixLayout from "../components/SeatMatrixLayout";
import BookingModal from "../components/BookingModal";

export default function SeatMap() {
  const [seats, setSeats] = useState(seatsData);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);

  // Handle clicking a seat
  const handleSeatClick = (id) => {
    const seat = seats.find((s) => s.id === id);

    if (!seat) return;

    if (seat.status === "booked") {
      alert(`Seat ${id} is booked by ${seat.owner.name || "someone"}`);
      return;
    }

    setSelectedSeat(id);
    setShowBooking(true);
  };

  // Confirm booking
  const confirmBooking = (bookingData) => {
    setSeats((prev) =>
      prev.map((s) =>
        s.id === selectedSeat
          ? {
              ...s,
              status: "booked",
              owner: {
                name: bookingData.name,
                phone: bookingData.phone,
                plan: bookingData.plan,
              },
            }
          : s
      )
    );

    setShowBooking(false);
  };

  return (
    <div className="p-6 flex flex-col items-center">

      {/* Library Name */}
      <h1 className="text-3xl font-extrabold text-white mb-2">
        Karol Bagh Central Library
      </h1>

      {/* Disclaimer */}
      <p className="text-gray-400 text-sm italic mb-6">
        *Seat map is not to scale — only for visual representation.
      </p>

      {/* Seat Layout */}
      <SeatMatrixLayout seats={seats} onSeatClick={handleSeatClick} />

      {/* Booking Popup */}
      {showBooking && (
        <BookingModal
          seatId={selectedSeat}
          onClose={() => setShowBooking(false)}
          onConfirm={confirmBooking}
        />
      )}
    </div>
  );
}
