import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';
import Title from '../components/Title';

const homeLayout = () => {
    return (
        <>
            <Title title="Home" />
            <Navbar></Navbar>
            <Outlet>
            </Outlet>
            <Footer></Footer>
        </>
        
    );
};

export default homeLayout;