import { Link } from "react-router-dom";

const libraries = [
  {
    id: "karolbagh-central",
    name: "Karol Bagh Central Library",
    location: "Karol Bagh, Delhi",
    totalSeats: 40,
    availableSeats: 12,
  },
  {
    id: "rajajinagar-studyhub",
    name: "Rajajinagar Study Hub",
    location: "Bengaluru",
    totalSeats: 30,
    availableSeats: 4,
  },
  {
    id: "andheri-reading-room",
    name: "Andheri Reading Room",
    location: "Mumbai",
    totalSeats: 50,
    availableSeats: 0,
  },
];

function getStatus(available) {
  if (available === 0) return "FULL";
  if (available < 5) return "FILLING FAST";
  return "AVAILABLE";
}

function getStatusColor(status) {
  if (status === "FULL") return "bg-red-500";
  if (status === "FILLING FAST") return "bg-yellow-500";
  return "bg-green-500";
}

export default function ExploreLibraries() {
  return (
    <div className="max-w-7xl mx-auto pt-28 px-6">
      <h1 className="text-4xl font-extrabold mb-2">
        Explore Libraries 📚
      </h1>
      <p className="text-gray-500 mb-10">
        Choose a library and reserve your seat instantly.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {libraries.map((lib) => {
          const status = getStatus(lib.availableSeats);

          return (
            <Link
              key={lib.id}
              to={`/libraries/${lib.id}`}
              className="rounded-2xl border p-6 hover:shadow-xl transition bg-white"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">{lib.name}</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    📍 {lib.location}
                  </p>
                </div>

                <span
                  className={`text-white text-xs px-3 py-1 rounded-full ${getStatusColor(
                    status
                  )}`}
                >
                  {status}
                </span>
              </div>

              <div className="mt-6 text-gray-700">
                <p>
                  🪑 Seats Available:{" "}
                  <span className="font-bold">
                    {lib.availableSeats}/{lib.totalSeats}
                  </span>
                </p>
              </div>

              <div className="mt-6 text-blue-600 font-semibold">
                View Seat Layout →
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
