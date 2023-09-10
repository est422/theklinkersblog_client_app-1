import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { updatePost } from '../slices/postsSlice'

function UpdatePostComponent () {

    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false)
    const [post, setPost] = useState({})

    const navigate = useNavigate()
    const handleClose = (event) => {
        event.preventDefault()
        navigate("/blogs")
    }

    const handleInputsChange = (e) => {
        e.preventDefault()
        setPost({...post, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else if (form.checkValidity() === true) {
            dispatch(updatePost(post))
            navigate("/blogs")
            // setValidated(true)
        }
        setValidated(true)
        
    }


    return(
        <>
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                <h2 data-aos="fade-up">New Post</h2>
                </div>

                <div className="row justify-content-center">

                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
                        <div className="col-xl-9 col-lg-12 mt-2">
                            <form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                                </div>
                                <div className="col-md-6 form-group">
                                <select id="inputState" className="form-select" onChange={handleInputsChange}>
                                <option selected>Choose category</option>
                                <option value="Ppr">Ppr</option>
                                <option value="ConstructionChemicals">Construction Chemicals</option>
                                </select>
                            </div>
                            </div>
                            <div className="form-group mt-3">
                            <textarea type="text" className="form-control" name="postDescription" onChange={handleInputsChange} placeholder="Description" rows={20}/>
                            </div>
                            <div className="text-center mt-2">
                                <button className="m-2" type="submit">Send Message</button>
                                <button type="reset" className="btn btn-primary m-2">Reset</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
        </>
    )
}

export default UpdatePostComponent;