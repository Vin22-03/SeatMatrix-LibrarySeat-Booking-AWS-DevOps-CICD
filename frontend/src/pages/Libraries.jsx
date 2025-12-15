import { Link } from "react-router-dom";

export default function Libraries() {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">Explore Libraries 📚</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <LibraryCard
          name="Karol Bagh Central Library"
          city="Delhi"
          seats="12/40"
          id="karol-bagh"
        />
      </div>
    </div>
  );
}

function LibraryCard({ name, city, seats, id }) {
  return (
    <div className="border rounded-2xl p-6 shadow hover:shadow-xl transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{city}</p>
      <p className="mt-2">Seats Available: {seats}</p>

      <Link
        to={`/libraries/${id}`}
        className="text-blue-600 mt-4 inline-block"
      >
        View Seat Layout →
      </Link>
    </div>
  );
}
