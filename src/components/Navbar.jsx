import React, { useState, useEffect, useRef } from 'react';
import { logo } from "../utils/imagesGallery";
import "./Navbar.css";
import { gsap } from "gsap";

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const sidebarRef = useRef(null);
    const navbarRef = useRef(null);
    const logoAnim = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        gsap.fromTo(
            logoAnim.current,
            { y: "-100vw" },
            { y: "0vw", duration: 1.5, delay: 0.5, ease: "power3.out" }
        )
        const handleScroll = () => {
            const position = window.scrollY;
            if (position >= 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add('no-scroll');
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.classList.remove('no-scroll');
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.body.classList.remove('no-scroll');
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <nav ref={navbarRef} className={`fixed top-0 left-0 w-full p-3 main-color transition-opacity duration-300 ease-out z-20 ${isScrolled ? 'navbar-animation' : ''}`}>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a ref={logoAnim} href="#" className="flex items-center">
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
                    <a
                        href="#"
                        className="text-gray-200 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
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
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
