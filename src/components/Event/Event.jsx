import React from 'react';
import { Link } from 'react-router';

const Event = ({event}) => {
    
    return (
         
    <div data-aos="fade-right"
        className="card bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 shadow-xl border border-base-200 transition-all duration-300 hover:scale-[1.02]">
            <figure className="h-48 overflow-hidden">
                <img src={event.thumbnail} alt={event.name} className="object-cover w-full h-full" />
            </figure>
            <div className="card-body text-neutral-800 space-y-2">
                <h2 className="card-title text-xl font-bold text-primary">{event.name}</h2>
                <p><span className="font-semibold text-neutral-600">Category:</span> {event.category}</p>
                <p><span className="font-semibold text-neutral-600">Date:</span> {event.date}</p>
                <p><span className="font-semibold text-neutral-600">Location:</span> {event.location}</p>
                <p><span className="font-semibold text-neutral-600">Entry Fee:</span> {event.entry_fee || 'Free'}</p>
                <div className="card-actions justify-end">    
                <Link to={`/event/${event.id}`} className="btn btn-sm btn-primary">View More</Link>
                </div>
            </div>
        </div>


        
       
    );
};

export default Event;