import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import adminAuthStore from "../../stores/adminAuthStore"

const AdminProtectedRoute = () => {

    const isAuthenticated = adminAuthStore((state)=> state.isAuthenticated)

    if (!isAuthenticated) {
        return <Navigate to={"/login"} replace />
    }
    return <Outlet />
}

export default AdminProtectedRoute