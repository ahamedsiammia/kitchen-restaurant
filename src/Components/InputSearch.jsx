"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {
    const router = useRouter();
    const params = useSearchParams();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const value = e.target.search.value;
        // Ready to new Search params
        const newParams =new URLSearchParams(params.toString())
        // set query
        newParams.set("search",value);
        // push query
        router.push(`?${newParams.toString()}`)

        console.log(value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='space-x-4'>
                <input name='search' className='bg-orange-500  text-white px-5 py-2 rounded-xl ' type="text" placeholder='Enter Food Name' />
                <button className='bg-orange-500  text-white px-5 py-2 rounded-xl cursor-pointer'>Search</button>
            </form>
        </div>
    );
};

export default InputSearch;