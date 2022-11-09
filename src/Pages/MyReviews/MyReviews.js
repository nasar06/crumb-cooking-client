import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contexts/AuthProvider';

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



    return (
        <div>
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
                                    <button className="px-3 btn-error ml-3 text-white">Delete</button>
                                </td>
                            </tr>
                        </tbody >)
                    }
                </table>
            </div>

        </div>
    );
};

export default MyReviews;