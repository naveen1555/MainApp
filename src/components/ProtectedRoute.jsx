// components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
    const username = Cookies.get("username");

    return username ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
