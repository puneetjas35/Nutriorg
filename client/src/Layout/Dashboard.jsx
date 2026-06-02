import React from 'react'
import UserMenu from '../UserMenu'
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <section className='bg-white'>
            <div className='container mx-auto p-3 grid lg:grid-cols-[250px,1fr]'>

                {/* Left Part */}
                <div className='py-4 sticky top-24 overflow-auto lg:block hidden'>
                    <UserMenu />
                </div>


                {/* Right Part */}
                <div className='bg-white p-4'>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default Dashboard