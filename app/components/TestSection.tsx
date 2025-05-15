"use client";

import React, { useState } from "react";
import axios from "axios";

const depressionQuestions = [
  "How would you describe the emotions you experience most often throughout the day?",
  "In what situations do you tend to blame yourself or feel guilty?",
  "Can you describe a recent moment when you felt like you weren’t successful or satisfied with yourself?",
  "How do you view your own self-worth or value?",
  "Have you ever felt like you were being punished or that you deserved something bad? Please explain.",
  "What kinds of tasks or situations do you find hardest to concentrate on?",
  "Describe a recent decision you found difficult to make. What made it challenging?",
  "What thoughts come to your mind when you think about your future?",
  "Are there any thoughts that repeat in your mind and cause distress or anxiety? Please describe them.",
  "If you’ve ever had thoughts about harming yourself, what were you feeling or going through at the time?",
  "What activities did you previously enjoy that no longer bring you pleasure?",
  "Have you noticed any recent changes in your eating habits? What kind of changes?",
  "What has your sleep routine been like lately? Have you faced any problems falling or staying asleep?",
  "When do you usually feel tired or low in energy? How long does it last?",
  "Have you noticed changes in how you move, speak, or behave physically? Please describe.",
  "What situations make you feel irritated, frustrated, or angry more than usual?",
  "Can you recall a moment when you had trouble controlling your emotions? What happened?",
  "How do you feel about yourself when you’re alone or self-reflecting?",
  "Have your relationships with others changed recently? In what ways?",
  "How has your emotional state affected your ability to handle daily tasks like work, school, or chores?",
  "Do you think your emotional struggles are connected to any specific event or health issue? Please explain.",
  "What kind of thoughts or fears do you have about your physical health?",
  "How have your feelings about intimacy or sexual connection changed, if at all?",
  "Have you had any thoughts or perceptions that felt strange, disconnected from reality, or hard to explain? Please describe.",
];

export default function Home() {
  const [answers, setAnswers] = useState(
    Array(depressionQuestions.length).fill("")
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await axios.post(
        "https://umartariq-depression-detector-api.hf.space/predict",
        { responses: answers },
        { headers: { "Content-Type": "application/json" } }
      );
      setResult(response.data.prediction || "No prediction received");
    } catch (error) {
      console.error(error);
      setResult("❌ Error: Could not fetch prediction.");
    }
    setLoading(false);
  };

  const downloadResults = () => {
    const contentLines = depressionQuestions.map((q, i) => {
      return `Q${i + 1}: ${q}\nA${i + 1}: ${answers[i]}\n`;
    });

    const fullText = contentLines.join("\n") + `\n\nPrediction: ${result}`;
    const blob = new Blob([fullText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "depression_assessment_result.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1
        id="test"
        className="text-4xl font-bold mb-8 text-center text-orange-600"
      >
        🧠 Depression Self-Assessment
      </h1>

      <form className="space-y-6">
        {depressionQuestions.map((question, index) => (
          <div key={index}>
            <label className="font-semibold text-orange-700 block mb-2">{`${
              index + 1
            }. ${question}`}</label>
            <textarea
              className="w-full border border-orange-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              rows={3}
              value={answers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </form>

      <div className="mt-10 flex justify-center space-x-4">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          {loading ? "Analyzing..." : "Submit"}
        </button>

        {result && (
          <button
            onClick={downloadResults}
            className="bg-white text-orange-700 border border-orange-500 px-6 py-3 rounded-lg hover:bg-orange-100 font-semibold"
          >
            Download Results
          </button>
        )}
      </div>

      {result && (
        <div className="mt-10 p-6 border border-orange-300 rounded bg-orange-50 text-center">
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">
            Prediction Result
          </h2>
          <p className="text-lg text-gray-800">{result}</p>
        </div>
      )}
    </main>
  );
}
