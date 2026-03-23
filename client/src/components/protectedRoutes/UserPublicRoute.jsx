import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import userAuthStore from '../../stores/userAuthStore'

const UserPublicRoute = () => {
  const isAuthenticated = userAuthStore((state) => state.isAuthenticated)

  // if (!isAuthenticated) {
  //   return <Navigate to={"/"} replace />
  // }

  if (isAuthenticated) {
  return <Navigate to="/dashboard" replace />
}
  return <Outlet />
}

export default UserPublicRoute


