import ReviewCardSkeltion from '@/Components/Skeleton/ReviewCardSkeltion';
import React from 'react';

const ReviewLoading = () => {
    return (
        <div className='space-y-5 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5'>
            {
                [...Array(6)].map((_,index)=> <ReviewCardSkeltion key={index}></ReviewCardSkeltion>)
            }
        </div>
    );
};

export default ReviewLoading;