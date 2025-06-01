import Event from "../Event/Event";


const Upcoming = ({events}) => {
    return (
         <div className="p-6 max-w-11/12 mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Upcoming Events</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map(event => (
                <Event key={event.id} event={event} />
                ))}
            </div>
    </div>
    );
};

export default Upcoming;