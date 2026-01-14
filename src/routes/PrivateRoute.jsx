import React from 'react'
import { AuthContext } from '../context/AuthProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router';

export const PrivateRoute = ({ children }) => {
const navigate = useNavigate();
    const {user, loading} = useContext(AuthContext);
   if(loading){
    return <div>Loading...</div>;
   }
   if(user){
    return children;
   }
   if(!user){
    return navigate('/login');
   }
}
