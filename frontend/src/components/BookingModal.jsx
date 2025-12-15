import { useState } from "react";

export default function BookingModal({ seatId, onClose, onConfirm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("monthly");
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const [startDate, setStartDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return alert("Name is required");
    if (!phone.trim()) return alert("Phone number is required");
    if (!startDate) return alert("Start date is required");
    if (!expiryDate) return alert("Expiry date is required");

    onConfirm({
      name,
      phone,
      plan,
      paymentStatus,
      startDate,
      expiryDate,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/90 p-6 rounded-2xl w-[380px] shadow-2xl text-slate-900">
        
        <h2 className="text-2xl font-bold mb-4 text-center">
          Book Seat {seatId}
        </h2>

        <div className="flex flex-col gap-3">

          {/* Name */}
          <input
            className="border p-2 rounded-lg"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Phone */}
          <input
            className="border p-2 rounded-lg"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Plan */}
          <select
            className="border p-2 rounded-lg"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          {/* Payment Status */}
          <select
            className="border p-2 rounded-lg"
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
          >
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>

          {/* Start Date */}
          <input
            type="date"
            className="border p-2 rounded-lg"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          {/* Expiry Date */}
          <input
            type="date"
            className="border p-2 rounded-lg"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
