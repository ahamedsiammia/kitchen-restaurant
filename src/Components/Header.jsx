import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-orange-50   px-4  h-20 '>
            <Link href={"/"}>
            {/* <img className='w-20 h-20' src="https://i.ibb.co.com/KjfMtVNZ/restorent-logo-removebg-preview.png" alt="" /> */}
            <Image width={110} height={40} className='w-20 h-20' src="/restorent.png" alt='restorent image'  /> 
            </Link>
        <div className='space-x-10 font-bold'>
            <NavLink prefetch={false} href={"/foods"}>Foods</NavLink>
            <NavLink href={"/reviews"}>Reviews</NavLink>
            <NavLink href={"/feedback"}>Feedbacks</NavLink>
        </div>
        </div>
    );
};

export default Header;