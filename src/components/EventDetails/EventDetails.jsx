import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const EventDetails = () => {
    const eventId=useParams();
    const id=parseInt(eventId.id);
   // console.log(id);

   const events=useLoaderData();
   const event=events.find(event=> event.id===id);


   const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setFormSubmitted(true);
    };

   if (!event) {
  return (
    <div className="flex justify-center mt-20">
      <div className="bg-gradient-to-br from-pink-200 via-red-100 to-yellow-100 shadow-lg rounded-2xl p-10 w-full max-w-md text-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">😔 Event Not Found</h2>
        <p className="text-lg text-gray-700">
          The event you're looking for doesn't exist or might have been removed.
        </p>
      </div>
    </div>
  );
}

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="bg-gradient-to-r from-[#f0f4ff] to-[#e0ffe0] rounded-xl shadow-lg p-6">
                <img
                src={event.thumbnail}
                alt={event.name}
                className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <h2 className="text-3xl font-bold mb-2 text-gray-800">{event.name}</h2>
                <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Category:</span> {event.category}</p>
                <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Date:</span> {event.date}</p>
                <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Location:</span> {event.location}</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                {event.description || 'No additional description available for this event.'}
                </p>

                <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-green-600">🎟 Reserve Your Seat</h3>

                {formSubmitted ? (
                    <div className="alert alert-success shadow-lg bg-green-100 text-green-800 font-medium">
                    ✅ Your seat has been reserved! See you there!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        required
                    />
                    <button
                        type="submit"
                        className="btn bg-green-500 hover:bg-green-600 text-white font-semibold px-6"
                    >
                        Reserve Seat
                    </button>
                    </form>
                )}
                </div>
            </div>
         </div>
    );
};

export default EventDetails;