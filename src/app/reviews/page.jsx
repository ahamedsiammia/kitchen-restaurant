"use client"
import ReviewCard from '@/Components/Card/reviewCard';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './ReviewLoading';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
        .then(res => res.json())
        .then(data => {
            setReviews(data.reviews)
            setLoading(false)
        })

    },[])
    if(loading){
        return <ReviewLoading></ReviewLoading>
    }
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold'>Total <span className='text-amber-400'>{reviews.length}</span> Review  Found</h1>
            </div>
            <div className='space-y-5 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5' >
                {
                    reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;