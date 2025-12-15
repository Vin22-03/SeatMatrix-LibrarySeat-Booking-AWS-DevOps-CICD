import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const goToSeats = () => navigate("/dashboard/manage-seats");

  const cards = [
    { title: "Manage Seats", icon: "🪑", action: goToSeats },
    { title: "Payments", icon: "💳" },
    { title: "Active Users", icon: "👥" },
    { title: "Library Settings", icon: "⚙️" },
    { title: "Analytics", icon: "📊" },
    { title: "Announcements", icon: "📢" },
    { title: "Support", icon: "🛠️" },
    { title: "Logout", icon: "🚪", action: () => {
        localStorage.removeItem("role");
        navigate("/");
      }
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-10">Owner Dashboard 🧑‍💼</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={card.action}
            className="card-box"
          >
            <div className="card-icon">{card.icon}</div>
            <div className="card-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
