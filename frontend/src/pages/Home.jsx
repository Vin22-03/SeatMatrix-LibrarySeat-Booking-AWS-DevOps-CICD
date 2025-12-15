import logo from "../assets/seatmatrix-logo.png";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">

      {/* CONTENT AREA (fills remaining height) */}
      <div className="flex-1 flex items-center justify-center bg-[#0f172a] px-10">
        
        {/* LEFT SIDE — LOGO */}
        <div className="w-1/2 flex justify-center">
          <img 
            src={logo} 
            alt="SeatMatrix Logo"
            className="w-[380px] drop-shadow-2xl"
          />
        </div>

        {/* RIGHT SIDE — TEXT + BUTTONS */}
        <div className="w-1/2 text-left text-white pr-10">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
            Smart Seat Booking <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Made Simple 🚀
            </span>
          </h1>

          <p className="text-lg text-gray-300 mt-6 leading-relaxed max-w-md">
            Real-time seat reservation for libraries & study zones — 
            powered by <span className="text-cyan-300">AWS</span>, 
            <span className="text-blue-300"> DevOps</span> & 
            <span className="text-cyan-400"> modern UI</span> by VinCloudOps.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-4">
            <a
              href="/libraries"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white 
              px-8 py-3 rounded-xl text-lg shadow-xl hover:scale-105 transition-all"
            >
              Explore Libraries →
            </a>

            <a
              href="/login"
              className="px-8 py-3 rounded-xl text-lg border border-white/20 
              hover:bg-white/10 transition-all text-white"
            >
              Owner Login
            </a>

            <a
              href="/about"
              className="px-8 py-3 rounded-xl text-lg border border-white/20 
              hover:bg-white/10 transition-all text-white"
            >
              About Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
