import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [])


    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]
            dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 font-Ovo 
                ${isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href="#top">
                    <Image
                        alt="Logo"
                        src={isDarkMode ? assets.logo_dark : assets.logo}
                        className="w-28 cursor-pointer mr-14"
                    />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
                   ${isScroll ? "" : "shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                            alt="Moon"
                            className="w-6 cursor-pointer"
                        />
                    </button>
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 
                        rounded-full ml-4 dark:border-white/50"
                    >
                        Contact
                        <Image alt="Arrow" src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-4" />
                    </a>
                    <button className='block md:hidden ml-3'
                        onClick={openMenu} >
                        <Image src={assets.menu_black} alt="Menu" className="w-6 cursor-pointer" />
                    </button>
                </div>

                {/* mobile menu */}

                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed 
                -right-64 top-0 bottom-0 z-50 w-64 h-screen bg-rose-50 transition duration-500
                dark:bg-darkHover dark:text-white">
                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                        <Image
                            src={isDarkMode?assets.close_white:assets.close_black}
                            alt='Close'
                            className='w-5 cursor-pointer'
                        />
                    </div>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About me</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" onClick={closeMenu}>My Works</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>

            </nav>
        </>
    );
};

export default Navbar;