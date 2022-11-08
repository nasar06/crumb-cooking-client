import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import TopNavbar from '../Pages/Shared/TopNavbar';

const Main = () => {
    return (
        <>
            <div className='w-11/12 mx-auto mt-8'>
                <TopNavbar></TopNavbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer></>
    );
};

export default Main;