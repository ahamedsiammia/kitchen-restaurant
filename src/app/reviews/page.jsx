import React from 'react';
import ReviewsPage from './ReviewsPage';


export const metadata = {
//   title: "All-Reviews",
    title:{
        absolute:"Customer Reviews"
    },
  description: "Best FastFood in Mymensingh",
};

const AllReviews = () => {
    return (
        <div>
           <ReviewsPage></ReviewsPage>
        </div>
    );
};

export default AllReviews;