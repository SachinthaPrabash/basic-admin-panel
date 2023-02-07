import React, { useState } from 'react'
import { HiMenu, HiUser, HiViewBoards, HiViewGrid } from 'react-icons/hi'
import { BiCameraMovie, BiCategory } from "react-icons/bi";
import { Link } from 'react-router-dom'
import Logo from '../images/CompanyBrandLogo.avif'
import userLogo from '../images/user.avif'

const Sidebar = () => {

    const [mainMenuOpen, setMainMenuOpenOpen] = useState(true);
    const [userMenu, setUserMenu] = useState(true);

    const menus = [
        { name: "Dashboard", link: '/', icon: HiViewGrid },
        { name: "Tickets", link: '/tickets', icon: HiViewBoards },
        { name: "Movies", link: '/movies', icon: BiCameraMovie },
        { name: "Categories", link: '/categories', icon: BiCategory },
        { name: "Users", link: '/users', icon: HiUser },

    ]

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button onClick={() => setMainMenuOpenOpen(!mainMenuOpen)} type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <HiMenu className="w-6 h-6" />
                            </button>
                            <Link to='/' className='flex ml-2 md:mr-24'>
                                <img src={Logo} className="h-8 mr-3 rounded-full" alt="Company logo" />
                                <span className="self-center text-base font-semibold sm:text-xl whitespace-nowrap dark:text-white">Company Name</span>
                            </Link>
                            <h1 className='text-lg font-bold hidden md:block  text-white'>Welcome to Ticket Booking DashBoard</h1>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div>
                                    <button onClick={() => setUserMenu(!userMenu)} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" >
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src={userLogo} alt="user photo" />
                                    </button>
                                </div>
                                <div className={`${userMenu ? "hidden" : "absolute top-9"} z-50  right-1.5 my-4 text-base list-none bg-white divide-y
                                 divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} >
                                    <div className="px-4 py-3" >
                                        <p className="text-sm text-gray-900 dark:text-white" >
                                            Admin
                                        </p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" >
                                            admin@companyMail.com
                                        </p>
                                    </div>
                                    <ul className="py-1" >
                                        <li>
                                            {menus?.map((menu, i) => (
                                                <Link to={menu?.link} key={i} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">{menu?.name}</Link>
                                            ))}
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className={`${mainMenuOpen ? "-translate-x-full" : "-translate-x-0"} fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform 
             bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2">
                        <li>
                            {menus?.map((menu, i) => (
                                <Link to={menu?.link} key={i} className="flex items-center p-2 hover:text-green-400 text-base font-normal  rounded-lg text-white hover:bg-gray-700 ">
                                    <div className="w-6 h-6 transition duration-75 flex items-center ">{React.createElement(menu?.icon)}</div>
                                    <span className="ml-3">{menu?.name}</span>
                                </Link>
                            ))}
                        </li>

                    </ul>
                </div>
            </aside>

        </>
    )
}

export default Sidebar