import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div>
            <Helmet>
                <title>404</title>
            </Helmet>
            <img style={{width: '100%', maxHeight: '100vh'}} src='https://muffingroup.com/blog/wp-content/uploads/2020/03/404.jpg' />
        </div>
    );
};

export default NotFound;