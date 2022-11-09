import { Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { UserContext } from '../../Contexts/AuthProvider';
import Review from './Review';
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//photo view
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetail = () => {
    const { user } = useContext(UserContext)
    const singleService = useLoaderData()
    const [Sreviews, setSreviews] = useState();
    const [postData, setPostData] = useState('')
    const { _id, name, price, img, description, rating, published } = singleService

    const location = useLocation();
    // handel review
    const handelReview = (e) => {
        e.preventDefault()
        //set review data
        const review = e.target.review.value;
        const reviewInfo = {
            service: _id,
            serviceName: name,
            review: review,
            name: user?.displayName ? user?.displayName : 'No Name',
            email: user?.email,
            photoURL: user?.photoURL ? user?.photoURL : 'https://www.codewithharry.com/img/user.png',
        }

        e.target.reset()
        //Post review
        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                setPostData(data.insertedId)
                toast("Review added successfully")
                console.log('post done', data)
            })
            .catch(err => console.error(err))
    }

    //get all reviews for this service
    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log('get review', data)
                setSreviews(data)
            })
            .catch(err => console.error('get review', err))
    }, [postData])



    return (
        <>
            <div className="w-9/12 mx-auto my-12 text-center">
                <ToastContainer />
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card
                            className='md:max-w-xl md:max-w-none'
                            horizontal={true}
                            imgSrc={img}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {name}
                            </h5>
                            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                {description}
                            </span>
                            <div className="mt-2.5 mb-5 flex items-center">
                                <svg
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <div className='flex items-center justify-between'>
                                    <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                        {rating}
                                    </span>
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                        Price: ${price}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">

                                {/* <Link
                        to={`/serviceDetail/${_id}`}
                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Details
                    </Link> */}
                            </div>
                        </Card>
                    </PhotoView>
                </PhotoProvider>


                <div className='mt-12'>
                    {
                        user?.uid ?
                            <div className='mt-8 flex'>
                                <img style={{ width: '50px' }} src={`${user?.photoURL ? user?.photoURL : 'https://www.codewithharry.com/img/user.png'}`} />
                                <form onSubmit={handelReview} className='flex w-full'>
                                    <input className='w-full mx-5 border-gray rounded' type='text' name='review' placeHolder='Type your review' />
                                    <button className='px-5 py-3 font-bold text-white rounded bg-lime-600'>Submit</button>
                                </form>
                            </div>
                            :
                            
                            <Link to='/login' state={{from: location}} replace><button className='px-5 py-3 font-bold text-white rounded bg-lime-600'>Please Login to add  a review</button></Link>
                    }
                </div>
            </div>
            <div>
                {
                    Sreviews?.map(rview => <Review
                        key={rview._id}
                        rview={rview}
                    ></Review>)
                }
            </div>

        </>
    );
};

export default ServiceDetail;