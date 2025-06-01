import React from 'react';
import { useLoaderData } from 'react-router';
import Slider from '../components/slider/Slider';
import Upcoming from '../components/upcomingEvents/Upcoming';
import JoinUs from '../components/JoinUs/JoinUs';
import Review from '../components/Review/Review';

const Home = () => {
    const events=useLoaderData();
    // console.log(events);

    return (
        <div>
           <Slider></Slider>
            <Upcoming events={events}></Upcoming>
            <JoinUs></JoinUs>
            <Review></Review>
        </div>
    );
};

export default Home;