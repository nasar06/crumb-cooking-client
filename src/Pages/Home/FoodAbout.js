import React from 'react';

const FoodAbout = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://s3.envato.com/files/95aa8b8b-560b-460f-b7f2-3c1e707f0898/inline_image_preview.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Food is About People</h1>
                    <p className="mb-5 text-left">At Sysco, we want to be your most valued and trusted business partner. We aim to exceed your expectations and deliver shipments as ordered. Sysco invests in your success at every level. We deploy 200 professionally-trained local chefs, and offer consulting and business planning services to enhance your menu, keep you on top of emerging trends, and increase the efficiencies that grow your business.</p>
                    <button className="">BECOME A CUSTOMER</button>
                </div>
            </div>
        </div>
    );
};

export default FoodAbout;