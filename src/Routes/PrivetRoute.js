import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Contexts/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(UserContext)

    if (loader) {
        return <div className="text-center text-3xl">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }

    if (user?.uid) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;