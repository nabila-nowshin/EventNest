import React from 'react';

const JoinUs = () => {
  return (
    <div className="min-h-screen  px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white bg-opacity-90 shadow-2xl rounded-3xl p-10 space-y-8">
        <h1 className="text-5xl font-extrabold text-center text-[#6a1b9a] drop-shadow-sm">
          Why Join <span className="text-[#ec407a]">Event Nest</span>?
        </h1>

        <p className="text-lg text-center text-gray-700">
          We’re more than a platform – we’re your gateway to unforgettable moments. From hidden art pop-ups to cutting-edge tech expos, we connect you with experiences worth sharing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-base md:text-lg">
          <div className="bg-purple-100/70 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-purple-800 mb-2">🎯 Personalized Feeds</h3>
            <p>Get event suggestions based on your interests, past visits, and preferred vibes.</p>
          </div>
          <div className="bg-pink-100/70 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-pink-800 mb-2">🌍 Local Highlights</h3>
            <p>Explore local gems and trending events near you with real-time updates.</p>
          </div>
          <div className="bg-teal-100/70 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-teal-800 mb-2">💬 Community Reviews</h3>
            <p>Read and share real experiences, not just promos. No sugarcoating here.</p>
          </div>
          <div className="bg-yellow-100/70 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-yellow-800 mb-2">🚀 Priority Access</h3>
            <p>Get notified early for high-demand events and grab your spot before it’s gone.</p>
          </div>
        </div>

        <div className="text-center pt-4">
          <button className="btn btn-secondary btn-wide text-lg shadow-md hover:scale-105 transition duration-300">
            Count Me In 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
