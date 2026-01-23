import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return null; // Global loader handles auth init

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
};
