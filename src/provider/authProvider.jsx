import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { AuthContext } from './authContext';
import { signOut } from "firebase/auth";

    export const AuthProvider = ({children}) => {
    const auth=getAuth(app);
    const [user, setUser] = useState(null);

    console.log(user);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Automatically updates user state
        });
        return () => unsubscribe(); // Cleanup
    }, []);


    const signOutUser=()=>{
        return signOut(auth);
    }
    return (
        <AuthContext.Provider value={{user,setUser,createUser,signInUser,signOutUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;