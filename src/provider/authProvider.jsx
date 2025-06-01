import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { AuthContext } from './authContext';

    export const AuthProvider = ({children}) => {
    const auth=getAuth(app);
    const [user, setUser] = useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <AuthContext.Provider value={{user,setUser,createUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;