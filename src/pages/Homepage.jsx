import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='p-20'>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
                <Link to="/" className="block max-w-max h-max p-6  border border-gray-200 rounded-lg shadow
               dark:border-white bg-gradient-to-r from-cyan-500 to-blue-500">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">Total Ticket Selling Count</h5>
                    <p className="flex flex-row-reverse text-2xl font-extrabold text-red-500">12</p>
                </Link>

                <Link to="/" className="block max-w-max h-max p-6  border border-gray-200 rounded-lg shadow
               dark:border-white bg-gradient-to-r from-cyan-500 to-blue-500">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">Total Ticket Selling Count</h5>
                    <p className="flex flex-row-reverse text-2xl font-extrabold text-red-500">12</p>
                </Link>

            </div>

        </div >
    )
}

export default Homepage