import React from 'react';
import { useLoaderData } from 'react-router-dom';
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ReviewEdit = () => {
    const singleReview = useLoaderData();
    const {_id, review, photoURL, serviceName } = singleReview;


    //update review
    const handelUpdate = e =>{
        e.preventDefault();

        const review = e.target.review.value;
        const dataInfo = {
            review
        }
        console.log(dataInfo)

        fetch(`https://crumb-cooking-server-nasar06.vercel.app/reviewEdit/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast('Update successfully!!!')
            }
            console.log(data)
        })
    }


    return (
        <>
            <h1 className='text-4xl text-lime-500 font-bold mt-28 mb-12'>Update Your Review</h1>
            <h1 className='text-2xl font-bold mb-5 text-left'>{serviceName}</h1>
            <div className='mb-28 flex'>
                <img style={{ width: '50px' }} src={photoURL} />
                <form onSubmit={handelUpdate} className='flex w-full'>
                    <input defaultValue={review} className='w-full mx-5 border-gray rounded' type='text' name='review' placeHolder='Type your review' />
                    <button className='px-5 py-3 font-bold text-white rounded bg-lime-600'>Update</button>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default ReviewEdit;