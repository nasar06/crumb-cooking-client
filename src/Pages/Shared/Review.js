import React from 'react';

const Review = ({rview}) => {
    const {name, email, serviceName, service, review, photoURL } = rview;
    return (
        <div className="overflow-x-auto w-full">
            <div className='flex items-center mb-8'>
                <img style={{width: '40px', borderRadius: '50%'}} src={photoURL}></img>
                <div className='text-justify ml-5'>
                <h3 className='text-xl'>{name}</h3> 
                <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;