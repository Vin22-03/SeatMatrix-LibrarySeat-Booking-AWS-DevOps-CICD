import React from "react";

export default function Tooltip({ visible, seat }) {
  if (!visible) return null;

  const owner = seat.owner || {};

  return (
    <div className={`seat-tooltip ${visible ? "visible" : ""}`}>
      <div className="row">
        <span className="label-key">Seat:</span> {seat.id}
      </div>

      {seat.status === "available" && (
        <div className="row text-green-700 font-semibold">
          Available ✔
        </div>
      )}

      {seat.status === "booked" && (
        <>
          <div className="row">
            <span className="label-key">Name:</span> {owner.name}
          </div>

          <div className="row">
            <span className="label-key">Phone:</span> {owner.phone}
          </div>

          <div className="row">
            <span className="label-key">Plan:</span> {owner.plan}
          </div>

          <div className="row">
            <span className="label-key">Payment:</span> {owner.paymentStatus}
          </div>

          <div className="row">
            <span className="label-key">Start:</span> {owner.startDate}
          </div>

          <div className="row">
            <span className="label-key">Expiry:</span> {owner.expiryDate}
          </div>
        </>
      )}
    </div>
  );
}
