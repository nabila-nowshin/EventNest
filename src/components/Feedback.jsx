import { useState } from "react";
import Title from "./Title";

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Title title="Feedback" />
      <div className="bg-gradient-to-r from-[#f0f4ff] to-[#e0ffe0] rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">💬 We Value Your Feedback</h2>
        <p className="text-gray-700 mb-6">
          Let us know what you think about the platform or how we can improve!
        </p>

        {submitted ? (
          <div className="alert alert-success shadow-lg bg-green-100 text-green-800 font-medium p-4 rounded-lg">
            ✅ Thanks for your feedback! We’ll use it to improve the experience.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="textarea textarea-bordered w-full min-h-[120px] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your thoughts..."
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-600 text-white font-semibold px-6"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Feedback;
