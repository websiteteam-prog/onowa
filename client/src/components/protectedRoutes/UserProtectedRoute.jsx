import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserAuthStore from "../../stores/userAuthStore"

const UserProtectedRoute = () => {

  const isAuthenticated = UserAuthStore((state) => state.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to={"/"} replace />
  }
  return <Outlet />
}

export default UserProtectedRoute
