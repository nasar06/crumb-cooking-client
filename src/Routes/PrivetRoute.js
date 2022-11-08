import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Contexts/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user} = useContext(UserContext)

    if(user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;