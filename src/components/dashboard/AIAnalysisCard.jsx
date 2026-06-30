function AIAnalysisCard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-8 bg-green-100 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        ✅ Backend Response
      </h2>

      <p>
        <strong>Success:</strong> {result.success ? "Yes" : "No"}
      </p>

      <p>
        <strong>Filename:</strong> {result.filename}
      </p>

      <p>
        <strong>Description:</strong> {result.description}
      </p>
    </div>
  );
}

export default AIAnalysisCard;