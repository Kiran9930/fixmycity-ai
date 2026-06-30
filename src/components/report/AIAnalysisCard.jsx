import { FaRobot, FaCheckCircle } from "react-icons/fa";

function AIAnalysisCard({ result }) {
  let data = null;

  try {
    const cleaned = result
      ?.replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    data = JSON.parse(cleaned);
  } catch (error) {
    console.error("JSON Parse Error:", error);
  }

  if (!data) {
    return (
      <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-red-600">
          AI Response
        </h2>

        <pre className="mt-4 whitespace-pre-wrap">
          {result}
        </pre>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100 rounded-2xl p-6 shadow-md">

      <div className="flex items-center gap-3 mb-5">
        <FaRobot className="text-3xl text-blue-600" />
        <h2 className="text-2xl font-bold">AI Analysis</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="bg-white rounded-xl p-4">
          <p className="text-gray-500">Detected Issue</p>
          <h3 className="font-bold text-lg">
            {data.category}
          </h3>
        </div>

        <div className="bg-white rounded-xl p-4">
          <p className="text-gray-500">Severity</p>
          <h3 className="font-bold text-red-600">
            {data.severity}
          </h3>
        </div>

        <div className="bg-white rounded-xl p-4">
          <p className="text-gray-500">Department</p>
          <h3 className="font-bold">
            {data.department}
          </h3>
        </div>

        <div className="bg-white rounded-xl p-4">
          <p className="text-gray-500">AI Confidence</p>
          <h3 className="font-bold text-green-600">
            {data.confidence}
          </h3>
        </div>

      </div>

      <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold">
        <FaCheckCircle />
        AI analysis completed successfully
      </div>

    </div>
  );
}

export default AIAnalysisCard;