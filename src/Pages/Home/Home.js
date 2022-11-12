import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';
import FoodAbout from './FoodAbout';
import Slider from './Slider';
import SpecialsOffer from './SpecialsOffer';
import { Helmet } from 'react-helmet-async';
import { UserContext } from '../../Contexts/AuthProvider';

const Home = () => {
    const {loader} =useContext(UserContext)
    const services = useLoaderData()
    console.log(loader)
    if(loader){
      return  <h1>Loading.....</h1>
    }
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <div className='my-24'>
                <h1 className='text-5xl mb-12 font-bold'>My Services</h1>
                <div className='grid md:grid-cols-3 gap-y-7'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <Link to='/services'><button className='mt-8 px-5 py-3 font-bold text-white rounded bg-lime-600'>See All</button></Link>
            </div>
            <FoodAbout></FoodAbout>
            <SpecialsOffer></SpecialsOffer>
        </>

    );
};

export default Home;