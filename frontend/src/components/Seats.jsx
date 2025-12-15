import React, { useState } from "react";
import Tooltip from "./Tooltip";

export default function Seat({ seat, isOwner, onClick }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    if (isOwner) setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    if (isOwner) setShowTooltip(false);
  };

  return (
    <div
      className="relative flex flex-col items-center seat cursor-pointer"
      data-status={seat.status}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(seat.id)}
    >
      {/* Desk */}
      <div className="desk flex items-center justify-center">
        <span className="label">{seat.id}</span>
      </div>

      {/* Chair */}
      <div className="chair"></div>

      {/* Tooltip only for owner */}
      {isOwner && (
        <Tooltip visible={showTooltip} seat={seat} />
      )}
    </div>
  );
}
