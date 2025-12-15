export default function About() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#111827] text-white">

      <h1 className="text-center text-5xl font-extrabold mb-14">
        About<span className="text-cyan-400"> SeatMatrix</span>
      </h1>

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT BOX – STUDENT BENEFITS */}
        <div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/10">
          <h2 className="text-3xl font-bold mb-4">🎓 For Students</h2>
          <p className="text-gray-300 mb-6">
            Students struggle daily to find a peaceful seat in libraries. SeatMatrix
            solves this by offering real-time visibility of all seats.
          </p>

          <ul className="space-y-4 text-gray-200">
            <li>✔ Real-time seat availability</li>
            <li>✔ Avoid crowding & unnecessary travel</li>
            <li>✔ Choose your preferred study spot</li>
            <li>✔ Faster check-in & hassle-free experience</li>
            <li>✔ Cleaner, quieter, more organized study environment</li>
          </ul>
        </div>

        {/* RIGHT BOX – OWNER BENEFITS */}
        <div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/10">
          <h2 className="text-3xl font-bold mb-4">📚 For Library Owners</h2>
          <p className="text-gray-300 mb-6">
            SeatMatrix digitizes seat management for libraries and study zones,
            giving owners full control and visibility.
          </p>

          <ul className="space-y-4 text-gray-200">
            <li>✔ Upload or create a digital seat layout map</li>
            <li>✔ Track bookings in real-time</li>
            <li>✔ Increase seat utilization & visibility</li>
            <li>✔ Get insights on peak hours & student demand</li>
            <li>✔ Build a modern digital identity for your library</li>
          </ul>
        </div>
      </div>

      {/* VISION BOX */}
      <div className="max-w-4xl mx-auto mt-14 bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl p-10 rounded-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">💡 Our Vision</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          To build the simplest, fastest, and most transparent digital seat booking
          ecosystem for libraries across India.  
          SeatMatrix brings calm, order, and efficiency for both students and owners.
        </p>
      </div>

      {/* TECH BUTTON */}
      <div className="text-center mt-12">
        <a
          href="/tech"
          className="px-10 py-4 rounded-2xl text-xl border border-white/20 
          hover:bg-white/10 transition-all text-white"
        >
          View Technical Details →
        </a>
      </div>

    </div>
  );
}
