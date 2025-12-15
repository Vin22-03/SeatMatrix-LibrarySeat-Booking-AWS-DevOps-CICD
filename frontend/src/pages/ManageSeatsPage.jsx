import React from "react";

export default function ManageSeatsPage({ seats, onUpdate }) {
  // Update a specific seat
  const updateSeat = (id, newData) => {
    const updated = seats.map((seat) =>
      seat.id === id ? { ...seat, ...newData } : seat
    );
    onUpdate(updated);
  };

  const handleVacate = (id) => {
    updateSeat(id, {
      status: "available",
      owner: {
        name: null,
        phone: null,
        plan: null,
        paymentStatus: null,
        startDate: null,
        expiryDate: null,
      },
    });
  };

  const handleBook = (id) => {
    const name = prompt("Enter user name:");
    if (!name) return;

    updateSeat(id, {
      status: "booked",
      owner: {
        name,
        phone: "N/A",
        plan: "manual-entry",
        paymentStatus: "pending",
        startDate: null,
        expiryDate: null,
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Seats 🛠️</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className="p-4 bg-white rounded-xl shadow flex justify-between items-center border"
          >
            <div>
              <h2 className="text-xl font-bold">{seat.id}</h2>

              <p className="text-gray-600 mt-1">
                Status:{" "}
                <span
                  className={
                    seat.status === "booked"
                      ? "text-red-500 font-semibold"
                      : "text-green-600 font-semibold"
                  }
                >
                  {seat.status}
                </span>
              </p>

              {/* Show user details only if booked */}
              {seat.status === "booked" && (
                <div className="text-gray-600 text-sm mt-1">
                  <p>📌 Name: <b>{seat.owner.name}</b></p>
                  <p>📞 Phone: {seat.owner.phone}</p>
                  <p>💳 Payment: {seat.owner.paymentStatus}</p>
                </div>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-2">
              {seat.status === "booked" ? (
                <button
                  onClick={() => handleVacate(seat.id)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Vacate
                </button>
              ) : (
                <button
                  onClick={() => handleBook(seat.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Book
                </button>
              )}

              <button
                onClick={() => handleVacate(seat.id)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Reset
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
