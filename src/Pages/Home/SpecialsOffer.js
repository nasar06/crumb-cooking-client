import React from 'react';

const SpecialsOffer = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 my-24 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                <h1 className="text-4xl font-bold bg-base-200 mb-5">Specials Offer.</h1>
                <img src="https://ithemeslab.com/tfdemo/joomla/appetite/images/demo_img/menu/item1.png" className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-left mb-3">Lamb Vindicator</h1>
                    <p className="font-bold text-gray-600 text-left"># Recording starts with the patter of a summer.</p>
                    <p className="font-bold text-gray-600 text-left"># Drifting tone like that of a not-quite-tuned.</p>
                    <p className="font-bold text-gray-600 text-left"># Station rises and for a while drowns out the.</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default SpecialsOffer;