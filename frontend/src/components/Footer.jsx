export default function Footer() {
  return (
    <footer className="border-t border-white/20 mt-20 py-10">
      <div className="max-w-7xl mx-auto text-center">

        {/* MAIN TEXT */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-200 tracking-wide">
          © 2025 <span className="text-cyan-400 font-bold">SeatMatrix</span>  
          · Built by <span className="text-blue-400">VinCloudOps</span> 💙
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-sm md:text-base text-gray-400">
          Innovating Space Management with <span className="text-cyan-300">AWS</span> &{" "}
          <span className="text-blue-300">DevOps</span>
        </p>

      </div>
    </footer>
  );
}
