import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contexts/AuthProvider';
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const MyReviews = () => {

    const { user, handelSignOut } = useContext(UserContext)
    const [myReview, setMyReview] = useState([])


        //get all review by email
    useEffect(() => {
        fetch(`https://crumb-cooking-server.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    handelSignOut()
                }
                return res.json()
            })
            .then(data => {
                setMyReview(data)
            })
            .catch(err => console.error(err))
    }, [user?.email])


    //review delete
    const handelDelete = (id) => {
        fetch(`https://crumb-cooking-server.vercel.app/review/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast('delete successfully')
                    const restReview = myReview.filter(Sr => Sr._id !== id);
                    setMyReview(restReview);
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <Helmet>
                <title>MyReviews</title>
            </Helmet>
            {
                myReview?.length > 0 ?
                    <div
                        className="overflow-x-auto my-12">
                        <table className="table table-zebra w-full">

                            <thead>
                                <tr className='bg-red-500'>
                                    <th>Service Name</th>
                                    <th>Review</th>
                                    <th>status</th>
                                </tr>
                            </thead>
                            {
                                myReview?.map(myView => < tbody
                                    key={myView?._id}
                                >
                                    <tr>
                                        <th>{myView?.serviceName}</th>
                                        <td>{myView?.review}</td>
                                        <td>
                                            <Link to={`/reviewEdit/${myView?._id}`}><button className="px-3 bg-lime-500 text-white">Edit</button></Link>
                                            <button onClick={() => handelDelete(myView?._id)} className="px-3 btn-error ml-3 text-white">Delete</button>
                                        </td>
                                    </tr>
                                </tbody >)
                            }
                        </table>
                    </div>
                    :
                    <Link to='/services'><button className="btn bg-lime-500 border-none my-20">No reviews were added</button></Link>
            }
            <ToastContainer />
        </div>
    );
};

export default MyReviews;