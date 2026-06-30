import { useState } from "react";
import api from "../api/api";

function TestConnection() {
  const [message, setMessage] = useState("");

  const checkConnection = async () => {
    try {
      const response = await api.get("/api/test");
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Connection Failed ❌");
      console.error(error);
    }
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow">
      <button
        onClick={checkConnection}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg"
      >
        Test Backend Connection
      </button>

      {message && (
        <p className="mt-4 font-semibold">
          {message}
        </p>
      )}
    </div>
  );
}

export default TestConnection;