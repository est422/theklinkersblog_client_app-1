import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { authSlice, userLogin } from '../slices/authSlice'

function LoginComponent () {

    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const isLoggedIn = useSelector((state) => state.authSlice.loggedIn)
    const error = useSelector((state) => state.authSlice.error)
    const isLoading = useSelector((state) => state.authSlice.isLoading)


    const navigate = useNavigate()
    const handleClose = (event) => {
        event.preventDefault()
        navigate("/blogs")
    }

    const handleInputsChange = (e) => {
        e.preventDefault()
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else if (form.checkValidity() === true) {
            dispatch(userLogin(user))
            navigate("/")
            // console.log(localStorage.getItem('token'))
            // setValidated(true)
        }
        // setValidated(true)
        
    }

    useEffect(() => {
        // dispatch(getAllPosts())
        // console.log(posts)
    }, [isLoggedIn, isLoading, error])

    return(
        <>
        {isLoading && 
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status"></div>
            </div> }
            {!isLoading && error ? 
                <div className="col-lg-12 justify-content-center entries">

                    <article className="entry">

                    <h2 className="entry-content text-center">
                        <a href="blog-single.html">{error}</a>
                    </h2>

                    </article>

                </div>
                 : !isLoggedIn ? 
                 <div className="col-lg-12 justify-content-center entries">

                    <article className="entry">

                    <h2 className="entry-content text-center">
                        <a href="blog-single.html">{error}</a>
                    </h2>

                    </article>

                </div> :
                null }
                 <section className="sinner-page mt-5 align-items-center justify-content-center">
                 <div className="container">
                     <div className="row justify-content-center">
                         <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
     
                         <div className="card mb-3">
     
                             <div className="card-body">
     
                             <div className="pt-4 pb-2">
                                 <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                 {/* <p className="text-center small">Enter your username and password to login</p> */}
                             </div>
     
                             <form className="row g-3" onSubmit={handleSubmit}>
     
                                 <div className="col-12">
                                 <label htmlFor="yourUsername" className="form-label">Username</label>
                                 <div className="input-group">
                                     <input type="text" name="username" className="form-control" id="yourUsername" onChange={handleInputsChange} required/>
                                     <div className="invalid-feedback">Please enter your username.</div>
                                 </div>
                                 </div>
     
                                 <div className="col-12">
                                 <label htmlFor="yourPassword" className="form-label">Password</label>
                                 <input type="password" name="password" className="form-control" id="yourPassword" onChange={handleInputsChange} required/>
                                 <div className="invalid-feedback">Please enter your password!</div>
                                 </div>
     
                                 <div className="col-12">
                                 <button className="btn btn-primary w-100" type="submit">Login</button>
                                 </div>
                             </form>
     
                             </div>
                         </div>
     
                         </div>
                     </div>
                 </div>
     
             </section>
        
        </>
    )
}

export default LoginComponent;