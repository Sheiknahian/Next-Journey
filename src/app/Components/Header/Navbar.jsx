'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div>
            <nav className="p-5 flex justify-between items-center border-b border-white bg-[#111827] backdrop-blur-md">
                <Link href={'/'}><h2 className="text-3xl text-white font-bold px-4 py-1 rounded-full bg-linear-to-r to-sky-200 from-sky-900">Sheikh <span className='text-sky-800'>Nahian</span></h2></Link>
                <div className="flex gap-2 text-white">
                    <Link href={'/'} className={`${pathname === '/Home' && 'bg-linear-to-r from-sky-900 to-sky-200 text-black font-semibold'} font-semibold cursor-pointer px-4 py-2 rounded-full`}>Home</Link>
                    <Link href={'/About'} className={`${pathname === '/About' && 'bg-linear-to-r from-sky-900 to-sky-200 text-black font-semibold'} font-semibold cursor-pointer px-4 py-2 rounded-full`}>About</Link>
                    <Link href={'/Services'} className={`${pathname === '/Services' && 'bg-linear-to-r from-sky-900 to-sky-200 text-black font-semibold'} font-semibold cursor-pointer px-4 py-2 rounded-full`}>Services</Link>
                    <Link href={'/Contact'} className={`${pathname === '/Contact' && 'bg-linear-to-r from-sky-900 to-sky-200 text-black font-semibold'} font-semibold cursor-pointer px-4 py-2 rounded-full`}>Contact</Link>
                    <Link href={'/Projects'} className={`${pathname === '/Projects' && 'bg-linear-to-r from-sky-900 to-sky-200 text-black font-semibold'} font-semibold cursor-pointer px-4 py-2 rounded-full`}>Projects</Link>
                </div>
                <div className="flex gap-3">
                    <button className="rounded-lg border-2 cursor-pointer border-sky-700 px-4 py-2 font-semibold text-sky-700 bg-white hover:bg-black">
                        Resume
                    </button>
                    <button className="rounded-lg bg-linear-to-r to-sky-300 font-semibold
                    cursor-pointer from-sky-900 px-4 py-2 font-medium text-black hover:text-white hover:bg-black">
                        Hire Me
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;