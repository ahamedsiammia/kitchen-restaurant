import FoodCard from '@/Components/Card/FoodCard';
import React from 'react';
import { resolve } from 'styled-jsx/css';
import CartItems from './CartItems';
import InputSearch from '@/Components/InputSearch';

const getFoods = async(search)=>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,{next:{revalidate:10}});
    const data = await res.json();
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return data?.foods || []
}

export const metadata = {
  title: "All Foods",
  description: "Best FastFood in Mymensingh",
};

const Foods = async({searchParams}) => {
    const {search= ""} = await searchParams;
    // console.log(search);
    const foods = await getFoods(search)
    console.log(foods);
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold'>Total <span className='text-amber-400'>{foods.length}</span> Food Found</h1>
            </div>
            <div className="my-4">
                <InputSearch></InputSearch>
            </div>
        <div className="flex   gap-5">
            <div className=' flex-1  grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  gap-5 mt-10'>
            {
                foods?.map(food => <FoodCard key={food.id} food={food}></FoodCard> )
            }
            </div>

            <div className=" w-[250px]  border-2 border-orange-500 rounded-2xl p-4">
                <h1 className='text-2xl font-bold'>Cart Item</h1> <hr />
                <CartItems></CartItems>
            </div>
        </div>
        </div>
    );
};

export default Foods;