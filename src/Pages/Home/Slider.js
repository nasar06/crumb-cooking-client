import { Carousel } from 'flowbite-react';
import React from 'react';

const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div>
                        <img src='https://gaviaswp.com/drupal/owl/sites/default/files/gva-sliderlayer-upload/slider-1-dlb8gy.jpg' />
                    <div style={{top: '40%', left:'15%',  position: 'absolute'}}>
                        <h1 className='text-3xl md:text-5xl text-white'>Cooking is Easy, We Will Prove it to You!</h1>
                        <p className='hidden md:visible text-white'>Ham hock jerky tail kevin, buffalo shoulder doner venison leberkas pig beef burgdoggen flank ribeye picanha burgdoggen. Ball tip landjaeger pork chop, kielbasa shank filet mignon cow burgdoggen cupim buffalo porchetta. Ribeye beef ribs flank.</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div>
                        <img src='https://gaviaswp.com/drupal/owl/sites/default/files/gva-sliderlayer-upload/slider-2-fjgc19.jpg' />
                    </div>
                    <div style={{top: '40%', left:'15%',  position: 'absolute'}}>
                        <h1 className='text-3xl md:text-5xl text-white'>Great Cooking Class For You</h1>
                        <p className='hidden md:visible text-white'>Ham hock jerky tail kevin, buffalo shoulder doner venison leberkas pig beef burgdoggen flank ribeye picanha burgdoggen. Ball tip landjaeger pork chop, kielbasa shank filet mignon cow burgdoggen cupim buffalo porchetta. Ribeye beef ribs flank.</p>
                        </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div>
                        <img src='https://gaviaswp.com/drupal/owl/sites/default/files/gva-sliderlayer-upload/slider-3-wfhxwh.jpg' />
                    </div>
                    <div style={{top: '40%', left:'15%',  position: 'absolute'}}>
                        <h1 className='text-3xl md:text-5xl text-white'>Cooking is Easy, We Will Prove it to You!</h1>
                        <p className='hidden md:visible text-white'>Ham hock jerky tail kevin, buffalo shoulder doner venison leberkas pig beef burgdoggen flank ribeye picanha burgdoggen. Ball tip landjaeger pork chop, kielbasa shank filet mignon cow burgdoggen cupim buffalo porchetta. Ribeye beef ribs flank.</p>
                        </div>
                </div>
                
            </Carousel>
        </div>
    );
};

export default Slider;