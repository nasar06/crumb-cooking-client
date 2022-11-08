import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth'


export const UserContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {


    const userInfo ={
        auth
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;