import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { AuthContext } from './authContext';
import { signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import toast from 'react-hot-toast';

export const auth=getAuth(app);

    export const AuthProvider = ({children}) => {
        const provider = new GoogleAuthProvider();

        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);

        //console.log(user);
        const createUser=(email,password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signin with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,provider)
        .then((result) => {
            setUser(result.user);
            toast.success(`Welcome, ${result.user.displayName || 'User'}!`);
            return result.user;//navigate cant be used ,as its not  rendered page
        })
        .catch((error) => {
            console.error(error);
            toast.error("Google Sign-In failed.");
        })
        .finally(() => setLoading(false));
        };

        useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Automatically updates user state
            setLoading(false);//stop loading after auth state known
        });
        return () => unsubscribe(); // Cleanup
    }, []);


    const signOutUser=()=>{
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
  };

    return (
        <AuthContext.Provider value={{user,setUser,createUser,signInUser,signOutUser,loading,setLoading,signInWithGoogle,updateUserProfile}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;