import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { authSlice } from '../slices/authSlice'

const ProtectedRoute = () => {
    const isLoggedIn = useSelector((state) => state.authSlice.loggedIn)

    useEffect(() => {

    }, [isLoggedIn])

    // show unauthorized screen if no user is found in redux store
    if (!isLoggedIn) {
        return (
        <div className='unauthorized'>
            <div className="col-lg-12 justify-content-center entries">

                <article className="entry">
                    <h2 className="entry-title">
                        <a href="blog-single.html">Unauthorized</a>
                    </h2>

                <h2 className="entry-content text-center">
                    <span>
                        <NavLink to='/login'>Login</NavLink> to gain access
                    </span>
                </h2>

                </article>

            </div>
        </div>
        )
    }
    // returns child route elements
    return <Outlet />

}
export default ProtectedRoute