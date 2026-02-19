import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-orange-50   px-4  h-20 '>
            <Link href={"/"}>
            <img className='w-20 h-20' src="https://i.ibb.co.com/KjfMtVNZ/restorent-logo-removebg-preview.png" alt="" />
            </Link>
        <div className='space-x-10 font-bold'>
            <NavLink href={"/foods"}>Foods</NavLink>
            <NavLink href={"/reviews"}>Reviews</NavLink>
        </div>
        </div>
    );
};

export default Header;