'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div>
            <nav className="p-5 flex justify-between items-center border-b">
                <Link href={'/'}><h2 className="text-3xl font-bold px-4 py-2 rounded-full bg-linear-to-r to-sky-200 from-sky-900">Next <span className='text-sky-800'>Journey</span></h2></Link>
                <div className="flex gap-2">
                    <Link href={'/About'} className={`${pathname === '/About' && 'bg-sky-800'} cursor-pointer px-4 py-2 rounded-full`}>About</Link>
                    <Link href={'/Services'} className={`${pathname === '/Services' && 'bg-sky-800'} cursor-pointer px-4 py-2 rounded-full`}>Services</Link>
                    <Link href={'/Features'} className={`${pathname === '/Features' && 'bg-sky-800'} cursor-pointer px-4 py-2 rounded-full`}>Features</Link>
                    <Link href={'/Contact'} className={`${pathname === '/Contact' && 'bg-sky-800'} cursor-pointer px-4 py-2 rounded-full`}>Contact</Link>
                    <Link href={'/Gallery'} className={`${pathname === '/Gallery' && 'bg-sky-800'} cursor-pointer px-4 py-2 rounded-full`}>Gallery</Link>
                </div>
                <div className="flex gap-10">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;