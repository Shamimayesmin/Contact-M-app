// import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Sidebar></Sidebar>
            {/* <Outlet></Outlet> */}
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Main;