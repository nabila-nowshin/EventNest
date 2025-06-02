import React, { useContext } from 'react';
import { AuthContext } from './authContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    //for redirect to original after login
    const location = useLocation();

     if (loading) {
        return <div className="text-center py-20 text-lg"><span className="loading loading-bars loading-xl"></span></div>; 
    }

    //for redirect to original after login
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if(user){
        return children;
    }

    else{
        return <Navigate to="/login"></Navigate>
    }
};

export default PrivateRoute;