import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNav from '../components/MainNav';
import ToggleMode from '../utils/ToggleMode'; // Import ปุ่มเปลี่ยนโหมด

const LayoutUser = () => {
    return (
        <div>
            {/* Navbar */}
            <MainNav />

            {/* ปุ่มเปลี่ยนโหมด */}
            <div className="text-right p-3">
                <ToggleMode />
            </div>

            {/* Main Content */}
            <main className='h-full px-4 mt-2 mx-auto'>
                <Outlet />
            </main>
        </div>
    );
};

export default LayoutUser;
