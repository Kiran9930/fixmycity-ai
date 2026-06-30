import { FaClipboardList, FaExclamationTriangle, FaCheckCircle, FaClock } from "react-icons/fa";

function DashboardStats({ reports }) {
  const total = reports.length;

  const high = reports.filter((report) => {
    try {
      const ai =
        typeof report.ai === "string"
          ? JSON.parse(report.ai)
          : report.ai;

      return ai.severity === "High";
    } catch {
      return false;
    }
  }).length;

  const pending = reports.length;
  const resolved = 0;

  const cards = [
    {
      title: "Total Reports",
      value: total,
      icon: <FaClipboardList className="text-blue-600 text-3xl" />,
    },
    {
      title: "High Priority",
      value: high,
      icon: <FaExclamationTriangle className="text-red-600 text-3xl" />,
    },
    {
      title: "Pending",
      value: pending,
      icon: <FaClock className="text-yellow-500 text-3xl" />,
    },
    {
      title: "Resolved",
      value: resolved,
      icon: <FaCheckCircle className="text-green-600 text-3xl" />,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center"
        >
          <div>
            <p className="text-gray-500">{card.title}</p>

            <h2 className="text-3xl font-bold mt-2">
              {card.value}
            </h2>
          </div>

          {card.icon}
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;