import FeedbackCard from '@/Components/Card/FeedbackCard';
import Link from 'next/link';
import React from 'react';

export const metadata={
    title:"feedbacks"
}

const getFeedback = async()=>{
    const res = await fetch("http://localhost:3000/api/feedback")
    return await res.json()
}

const FeedbackPage  =async () => {
    const feedback =await getFeedback();
    console.log(feedback);
    return (
        <div>
            <h1 className="text-3xl font-bold text-orange-400">{feedback.length} Feedback</h1>
        <div className="">

            <Link href={"/feedback/add"} className='btn bg-orange-500 text-white' >Add  Feedback</Link>
        </div>

            <div className="my-3 space-y-3">
                {
                    feedback.map(fd=> <FeedbackCard key={fd._id} fd={fd} ></FeedbackCard>)
                }
                </div>  
        </div>
    );
};

export default FeedbackPage;