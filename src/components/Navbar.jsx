import React, { useState, useEffect, useRef } from 'react';
import { logo } from "../utils/imagesGallery";
import { FaHouse, FaCircleInfo, FaBriefcase, FaBookOpenReader } from "react-icons/fa6";
import "./Navbar.css";
import { gsap } from "gsap";
import ToggleButton from './ToggleButton';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navbarRef = useRef(null);
    const logoAnim = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            logoAnim.current,
            { y: "-100vw" },
            { y: "0vw", duration: 1, delay: 0.5, ease: "power3.out" }
        )
        gsap.fromTo(
            ".tab-menu",
            { y: "100vw" },
            { y: "0vw", duration: 1, delay: 1.2, ease: "power3.out" }
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

    return (
        <>
            <nav ref={navbarRef} className={`fixed flex flex-col top-0 left-0 w-full p-3 main-color transition-opacity duration-300 ease-out z-20 ${isScrolled ? 'navbar-animation' : ''}`}>
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a ref={logoAnim} href="#" className="flex items-center">
                        <img src={logo} className='h-14' alt="" />
                    </a>
                    <div className='flex'>
                        <div className="hidden md:flex space-x-4 mt-2">
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
                        <div className='hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium'>
                            <ToggleButton />
                        </div>
                    </div>
                </div>
            </nav>
            <nav className='tab-menu w-full fixed bottom-3 z-20 md:hidden flex flex-wrap justify-between items-center mx-auto transition-opacity duration-300 px-2'>
                <div className='container flex flex-wrap justify-around items-center mx-auto main-color rounded-full py-3 text-3xl'>
                    <FaHouse className='icon-shadow' />
                    <FaCircleInfo className='icon-shadow' />
                    <FaBriefcase className='icon-shadow' />
                    <FaBookOpenReader className='icon-shadow' />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
