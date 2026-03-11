"use client"

import { useRouter } from "next/navigation";

const FeedbackForms = () => {
    const router = useRouter();
    const handleSubmit  =async(e)=>{
        e.preventDefault()
        const message = e.target.message.value;
        // alert(message);
        const res =await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({message})
        }) 
        const data = await res.json();
        if(data.insertedId){
            alert("success");
            router.push("/feedback")
        }
        else{
            alert("not success")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5 text-center">
                <textarea  required  name="message" className="w-xl border border-dashed" cols={30} rows={10} id=""></textarea> <hr />
                <button type="submit" className="btn bg-orange-500 text-white">Add Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForms;