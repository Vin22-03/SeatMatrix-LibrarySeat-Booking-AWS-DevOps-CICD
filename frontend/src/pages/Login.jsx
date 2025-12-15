import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please enter email & password");
      return;
    }

    // DEMO login
    localStorage.setItem("role", "owner");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6
      bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#111827] text-white">

      {/* MAIN WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full">

        {/* LEFT PANEL — LOGIN */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20
          rounded-3xl p-10 shadow-2xl">

          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Library Owner Login 🔐
          </h1>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Access your owner dashboard, manage seats, bookings, 
            customers, and library visibility — all inside SeatMatrix.
          </p>

          <input
            className="w-full mb-5 px-4 py-3 rounded-xl bg-black/30 border border-white/20
            placeholder-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full mb-8 px-4 py-3 rounded-xl bg-black/30 border border-white/20
            placeholder-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl
            text-xl font-semibold hover:scale-105 transition shadow-lg"
          >
            Login as Owner
          </button>

        </div>

        {/* RIGHT PANEL — INFO BOXES */}
        <div className="flex flex-col gap-8">

          {/* FIRST BOX */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 
            rounded-3xl p-8 shadow-xl">

            <h2 className="text-2xl font-bold text-cyan-300 mb-4">
              📌 First-Time Owners — Read This
            </h2>

            <p className="text-gray-200 text-lg leading-relaxed">
              After logging in for the first time, you must upload or design your  
              <span className="font-semibold text-white"> Library Seat Layout Map</span>  
              from the dashboard.
              <br /><br />
              This enables SeatMatrix to display your library to students and 
              activate real-time seat booking.
            </p>
          </div>

          {/* SECOND BOX */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 
            rounded-3xl p-8 shadow-xl">

            <h2 className="text-2xl font-bold text-blue-300 mb-4">
              💼 Owner Subscription Plans — Coming Soon
            </h2>

            <p className="text-gray-200 text-lg leading-relaxed mb-4">
              SeatMatrix will soon introduce premium features to support library
              owners and enhance visibility:
            </p>

            <ul className="list-disc list-inside text-gray-200 text-lg space-y-2">
              <li>Boost your library visibility</li>
              <li>Live analytics & booking insights</li>
              <li>Priority listing on Explore page</li>
              <li>Revenue dashboard & earning reports</li>
              <li>Auto-renew membership & payment tracking</li>
            </ul>

            <p className="text-gray-400 text-sm italic mt-4">
              Pricing will remain affordable — SeatMatrix is built to support libraries, not burden them.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
