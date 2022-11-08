import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'


export const UserContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    //signup with email and password
    const signUp =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login with email and password
    const logIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo ={
        signUp,
        logIn
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;