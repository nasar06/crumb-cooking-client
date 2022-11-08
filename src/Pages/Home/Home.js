import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';
import Slider from './Slider';

const Home = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <>
            <Slider></Slider>
            <div className='my-24'>
                <h1 className='text-5xl mb-12 font-bold'>My Services</h1>
                <div className='grid grid-cols-3 gap-y-7'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <Link to='/services'><button className='mt-8 px-5 py-3 font-bold text-white rounded bg-lime-600'>See All</button></Link>
            </div>
        </>

    );
};

export default Home;