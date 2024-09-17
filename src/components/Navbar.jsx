import React, { useState, useEffect, useRef } from 'react';
import { logo } from "../utils/imagesGallery"
import "./Navbar.css"

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavButtonChanged, setNavButtonChanged] = useState(false);
    const sidebarRef = useRef(null);
    const navbarRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            if (position >= 120) {
                setIsScrolled(true); // Add class when scrolled beyond 100px
            } else {
                setIsScrolled(false); // Remove class when scrolled above 100px
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Add or remove event listener for sidebar click outside
    useEffect(() => {
        if (isSidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);
    
    return (
        <nav ref={navbarRef} className={`top-0 left-0 w-full p-3 main-color transition-opacity duration-300 ease-out z-20 ${isScrolled ? 'navbar-animation' : ''}`} >
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex items-center">
                    <img src={logo} className='h-14' alt="" />
                </a>
                <div className="flex md:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="sidebar"
                        aria-expanded={isSidebarOpen}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Navbar for larger screens */}
                <div className="hidden md:flex space-x-4">
                    <a
                        href="#"
                        className="text-gray-200 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-200 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="text-gray-200 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Contact
                    </a>
                </div>
            </div>

            {/* Sidebar for small screens */}
            <div
                className={`fixed inset-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out bg-gray-50 bg-opacity-50`}
            >
                <div
                    ref={sidebarRef}
                    className="absolute left-0 top-0 w-64 bg-white h-full shadow-md"
                >
                    <button
                        onClick={toggleSidebar}
                        className="absolute top-4 right-4 text-gray-500 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                    <ul className="mt-12 space-y-4">
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
