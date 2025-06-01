import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const homeLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet>
            </Outlet>
            <Footer></Footer>
        </>
        
    );
};

export default homeLayout;