import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import Home from '../pages/Home';

const HomeLayout = () => {
    return (
        <div>
            <header className=''>
            <Navbar></Navbar>
            </header>
            

            <Outlet>
                <Home></Home>
            </Outlet>

            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;