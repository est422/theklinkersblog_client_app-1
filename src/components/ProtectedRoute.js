import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { authSlice } from '../slices/authSlice'

const ProtectedRoute = () => {
    const isLoggedIn = useSelector((state) => state.authSlice.loggedIn)

    // show unauthorized screen if no user is found in redux store
    if (!isLoggedIn) {
        return (
        <div className='unauthorized'>
            <h1>Unauthorized :(</h1>
            <span>
            <NavLink to='/login'>Login</NavLink> to gain access
            </span>
        </div>
        )
    }
    // returns child route elements
    return <Outlet />

}
export default ProtectedRoute