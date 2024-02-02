'use client'

import styles from './combonents.module.css';
import Link from "next/link";
import { useState } from 'react';
import { FaBars, FaCaretDown, FaSearch } from "react-icons/fa";
import PagesList from './PagesList';
import Logo from './Logo';

export default function NavBar() {
    let [isClicked, setIsClicked] = useState(false);
    let [remove, setRemove] = useState(false);
    const handle = ()=>{
        setIsClicked((prev)=>!prev);
        setRemove(true);
        setTimeout(() => {
            setRemove(false);
        }, 1000);
    };
    const setState = ()=>{
        setIsClicked(false);
        setRemove(true);
    };
    return (
        <nav className='flex h-20 justify-between px-3.5 items-center extralarge:px-32'>
            <Link href="/" className='small:w-28'><Logo /></Link>
            <div className='flex items-center gap-8 small:gap-0 h-full'>
                {/* this only for side nav on small screens */}
                <div className="moreThanLarge:hidden absolute right-20 small:right-12 cursor-pointer text-2xl hover:text-hover-color duration-300 " onClick={()=>{
                    setRemove(false)
                    setIsClicked(true)                    
                }}>
                    <FaBars/>
                </div>
                <div className={`${isClicked? "animate-show-bg fixed bg-shadow top-0 left-0 w-0 h-full z-40" : ""} ${remove? styles.removeBg : ""}`} onClick={handle}></div>
                <ul className={`${isClicked? styles.showSideNav : ""} ${remove? styles.removeSideNav : ""} flex items-center moreThanLarge:gap-8 text-lg h-full ${styles.sideNav}`}>
                    {/* this only for side nav on small screens */}
                    <div className='flex items-center gap-3 my-5 justify-between w-full px-5 moreThanLarge:hidden'>
                        <Logo />
                        <span className='block w-7 h-7 rounded-md border border-solid border-eee hover:border-red hover:bg-red
                        hover:text-white text-center duration-300 cursor-pointer' onClick={handle}>X</span>
                    </div>
                    <li className='hover:text-hover-color duration-300 font-semibold smallerThanLarge:border-b smallerThanLarge:w-full smallerThanLarge:pb-5 smallerThanLarge:pl-5 smallerThanLarge:border-eee moreThanLarge:border-none'>
                        <Link href="/" onClick={setState}>Home</Link>
                    </li>
                    <li className='hover:text-hover-color duration-300 font-semibold smallerThanLarge:border-b smallerThanLarge:w-full smallerThanLarge:pb-5 smallerThanLarge:pl-5 smallerThanLarge:border-eee moreThanLarge:border-none'>
                        <Link href="/about" onClick={setState}>About Us</Link>
                    </li>
                    <li className='hover:text-hover-color duration-300 font-semibold smallerThanLarge:border-b smallerThanLarge:w-full smallerThanLarge:pb-5 smallerThanLarge:pl-5 smallerThanLarge:border-eee moreThanLarge:border-none'>
                        <Link href="/services" onClick={setState}>Services</Link>
                    </li>
                    <li className='hover:text-hover-color duration-300 font-semibold smallerThanLarge:border-b smallerThanLarge:w-full smallerThanLarge:pb-5 smallerThanLarge:pl-5 smallerThanLarge:border-eee moreThanLarge:border-none'>
                        <Link href="/products" onClick={setState}>Products</Link>
                    </li>
                    <li className={`${styles.pages} flex items-center relative moreThanLarge:h-full cursor-pointer hover:text-hover-color duration-300 font-semibold gap-2 smallerThanLarge:w-full smallerThanLarge:pb-5 smallerThanLarge:pl-5 moreThanLarge:border-none`}>
                        <PagesList props={{setIsClicked, setRemove}} />
                        Pages
                        <FaCaretDown/>
                    </li>
                </ul>
                <div className='cursor-pointer border-l border-solid h-2/4 flex items-center pl-5 small:pl-2 small:w-fit text-xl hover:text-hover-color duration-300 font-semibold'>
                    <FaSearch/>
                </div>
            </div>
        </nav>
    )
}