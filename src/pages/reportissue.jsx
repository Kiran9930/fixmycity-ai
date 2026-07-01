import { useState } from "react";
import ImageUpload from "../components/report/ImageUpload";
import ReportForm from "../components/report/ReportForm";
import AIAnalysisCard from "../components/report/AIAnalysisCard";
import LocationMap from "../components/report/LocationMap";
import api from "../api/api";

function ReportIssue() {
  const [loading, setLoading] = useState(false);
  const [showAI, setShowAI] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [aiResult, setAiResult] = useState(null);
  const [image, setImage] = useState(null);


  const handleAnalyze = async () => {

     if (!image) {
    alert("Please upload an image.");
    return;
  }

    if (!description.trim()) {
      alert("Please enter issue description.");
      return;
    }

    setLoading(true);

    try {
   const formData = new FormData();

formData.append("image", image.file);
formData.append("description", description);

const response = await api.post(
  "/api/analyze-image",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);



setAiResult(response.data.result);
setShowAI(true);
    } catch (error) {
      console.error(error);
      alert("AI Analysis Failed");
    }

    setLoading(false);
  };


const handleSubmit = async () => {

  if (!aiResult) {
    alert("Please analyze the issue first.");
    return;
  }

  try {

    await api.post("/api/report", {
      title,
      description,
      image: image?.preview,
      ai: aiResult
    });

    alert("Report Submitted Successfully 🎉");

    // Reset Form
    setTitle("");
    setDescription("");
    setImage(null);
    setAiResult(null);
    setShowAI(false);

  } catch (err) {
    console.error(err);
    alert("Submission Failed");
  }

};



  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold">
          Report Community Issue
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Upload an image and let AI analyze the issue.
        </p>

       <ImageUpload
  image={image}
  setImage={setImage}
/>

        <ReportForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />

        <LocationMap />

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleAnalyze}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            {loading ? "🤖 Analyzing..." : "🤖 Analyze with AI"}
          </button>
        </div>

        {showAI && <AIAnalysisCard result={aiResult} />}

        <div className="mt-8 flex justify-end">
          <button
  onClick={handleSubmit}
  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition"
>
  🚀 Submit Report
</button>
        </div>

      </div>
    </div>
  );
}

export default ReportIssue;