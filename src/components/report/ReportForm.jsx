function ReportForm({ title, setTitle, description, setDescription }) {
  return (
    <div className="space-y-6">

      <div>
        <label className="block font-semibold mb-2">
          Issue Title
        </label>

        <input
          type="text"
          placeholder="Enter issue title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Description
        </label>

        <textarea
          rows="4"
          placeholder="Describe the issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-xl p-3"
        ></textarea>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block font-semibold mb-2">
            Category
          </label>

          <select className="w-full border rounded-xl p-3">
            <option>Pothole</option>
            <option>Water Leakage</option>
            <option>Garbage</option>
            <option>Street Light</option>
            <option>Road Damage</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Severity
          </label>

          <select className="w-full border rounded-xl p-3">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

      </div>

    </div>
  );
}

export default ReportForm;