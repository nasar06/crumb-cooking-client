import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='my-24'>
            <h1 className='text-5xl mb-12 font-bold'>My All Services</h1>
            <div className='grid md:grid-cols-3 gap-y-7'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
        </div>
    );
};

export default Services;