import React, { useContext, useEffect } from 'react';
import { AuthContext } from './authContext';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router';

const PublicRoute = ({children}) => {
    const {user}=useContext(AuthContext);

    useEffect(() => {
    if (user) {
      toast("You're already logged in 😎", {
        icon: "✅",
        style: {
          borderRadius: "10px",
          background: "#e0ffe0",
          color: "#065f46",
          fontWeight: "500"
        }
      });
    }
  }, [user]);



  return user ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
