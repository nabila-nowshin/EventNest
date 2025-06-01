import React from "react";

const reviews = [
  {
    id: 1,
    name: "Amina Rahman",
    text: "Loved the vibrant energy of TechXpo!🔥 Can't wait for the next one!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafiul Hasan",
    text: "Foodie Fiesta was a blast 🍔🍜. My taste buds are still celebrating!",
    rating: 4,
  },
  {
    id: 3,
    name: "Tanisha Karim",
    text: "The art fair was breathtaking 🎨✨. So much talent in one place!",
    rating: 5,
  },
];

const Review = () => {
  return (
    <div className="bg-gradient-to-br from-[#acb8e4] to-[#9bb6f1] min-h-screen py-16 px-4 lg:px-20">
      <h2 className="text-4xl text-white font-bold text-center mb-10">
        💬 What People Are Saying
      </h2>

      {/* Review Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="card bg-[#000118]/80 text-white shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <p className="text-sm mb-3">"{review.text}"</p>
            <p className="text-yellow-400">{"⭐".repeat(review.rating)}</p>
          </div>
        ))}
      </div>

      {/* Submit Review */}
      <div className="mt-16 bg-[#000118]/80 p-8 rounded-xl text-white max-w-2xl mx-auto shadow-xl">
        <h3 className="text-2xl font-bold mb-6 text-center">📝 Leave a Review</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full bg-white text-black"
          />
          <textarea
            className="textarea textarea-bordered w-full bg-white text-black"
            placeholder="Your Review"
          ></textarea>
          <button className="btn bg-[#52faca] hover:bg-[#3cdab0] text-black w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
