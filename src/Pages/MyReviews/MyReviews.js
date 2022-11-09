import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contexts/AuthProvider';
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    const { user } = useContext(UserContext)
    const [myReview, setMyReview] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReview(data)
                console.log(data)
            })
            .catch(err => console.error(err))
    }, [])

    //review delete
    const handelDelete = (id) =>{
        fetch(`http://localhost:5000/review/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                toast('delete successfully')
                const restReview = myReview.filter(Sr => Sr._id !== id);
                setMyReview(restReview);
                
            }
        })
        .catch(err => console.log(err))

    }

    return (
        <div>
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
                                            <button className="px-3 bg-lime-500 text-white">Edit</button>
                                            <button onClick={()=>handelDelete(myView?._id)} className="px-3 btn-error ml-3 text-white">Delete</button>
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