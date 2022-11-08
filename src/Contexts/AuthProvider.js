import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


export const UserContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    const googleProvider = new GoogleAuthProvider()

    //signup with email and password
    const signUp =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login with email and password
    const logIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google signIn
    const googleSignIn = () =>{
      return  signInWithPopup(auth, googleProvider)
    }

    //signOut
    const handelSignOut = () =>{
       return signOut(auth)
    }

    //get currentUser
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return () => unsubscribe()
    } , [])

    const userInfo ={
        signUp,
        logIn,
        googleSignIn,
        handelSignOut,
        user
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;