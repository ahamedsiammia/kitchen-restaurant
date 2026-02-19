import FoodCardSkeleton from '@/Components/Skeleton/FoodCardSkelton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-3 mt-10 gap-5'>
          {
            [...Array(12)].map((_,index)=> <FoodCardSkeleton key={index}></FoodCardSkeleton>)
          }  
        </div>
    );
};

export default loading;