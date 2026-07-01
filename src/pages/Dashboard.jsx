import { useEffect, useState } from "react";
import api from "../api/api";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardStats from "../components/dashboard/DashboardStats";

function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await api.get("/api/reports");
      setReports(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReport = async (index) => {
    try {
      await api.delete(`/api/report/${index}`);
      fetchReports();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <DashboardNavbar />

      <DashboardStats reports={reports} />

      <h1 className="text-3xl font-bold mt-8 mb-6">
        Community Reports
      </h1>

      {reports.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          No reports submitted yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {reports.map((report, index) => {
            const ai =
              typeof report.ai === "string"
                ? JSON.parse(report.ai)
                : report.ai;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-xl font-bold">
                  {report.title || "Untitled Report"}
                </h2>

                <p className="text-gray-600 mt-3">
                  {report.description}
                </p>

                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Category:</strong> {ai.category}
                  </p>

                  <p>
                    <strong>Severity:</strong> {ai.severity}
                  </p>

                  <p>
                    <strong>Department:</strong> {ai.department}
                  </p>

                  <p>
                    <strong>Confidence:</strong> {ai.confidence}
                  </p>
                </div>

                <div className="mt-5">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Pending
                  </span>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => deleteReport(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}

export default Dashboard;