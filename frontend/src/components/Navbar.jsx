import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/seatmatrix-logo.png"; // <-- add your logo file in /src/assets/

export default function Navbar() {
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsOwner(role === "owner");
  }, []);

  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center 
      backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-lg">

      {/* LOGO SECTION */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="SeatMatrix Logo" className="w-10 h-10" />

        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-extrabold text-white tracking-tight">
            Seat<span className="text-cyan-400">Matrix</span>
          </span>
          <span className="text-xs text-gray-300 -mt-1">by VinCloudOps</span>
        </div>
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-8 text-white text-lg items-center">

        <NavLink
          to="/"
          className="hover:text-cyan-300 transition font-semibold"
        >
          Home
        </NavLink>

        <NavLink
          to="/libraries"
          className="hover:text-cyan-300 transition font-semibold"
        >
          Libraries
        </NavLink>

        {/* Only owners see this */}
        {isOwner && (
          <NavLink
            to="/dashboard"
            className="hover:text-cyan-300 transition font-semibold"
          >
            Dashboard
          </NavLink>
        )}

        {/* OWNER LOGIN BUTTON */}
        {!isOwner && (
          <Link
            to="/login"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-xl 
            shadow-lg hover:scale-105 transition font-semibold text-white"
          >
            Owner Login
          </Link>
        )}
      </div>
    </nav>
  );
}
