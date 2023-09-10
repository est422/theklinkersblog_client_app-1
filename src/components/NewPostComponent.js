import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { createPost } from '../slices/postsSlice'

function NewPostComponent () {

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
            dispatch(createPost(post))
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
                        <div className="col-xl-9 col-lg-12">
                            <form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-lg-12 form-group">
                                <input type="text" name="postTitle" onChange={handleInputsChange} className="form-control" placeholder="title" required/>
                                </div>
                                {/* <div className="col-md-6 form-group">
                                <select id="inputState" className="postCategory" onChange={handleInputsChange}>
                                <option selected>Choose category</option>
                                <option value="Ppr">Ppr</option>
                                <option value="ConstructionChemicals">Construction Chemicals</option>
                                </select> 
                                </div>*/}
                            </div>
                            <div className="form-group mt-3">
                            <textarea type="text" className="form-control" name="postDescription" onChange={handleInputsChange} placeholder="Description" rows={5}/>
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
        {/* <div className="card p-5">
            <div className="card-body">
              <h5 className="card-title">New post</h5>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-lg-6">
                <input type="text" className="form-control" name="postTitle" onChange={handleInputsChange} placeholder="Title"/>
                </div>
                <div className="col-lg-6">
                  <select id="inputState" className="form-select">
                    <option selected>Choose category</option>
                    <option value="Ppr">Ppr</option>
                    <option value="ConstructionChemicals">Construction Chemicals</option>
                  </select>
                </div>
                <div className="col-lg-12">
                <textarea type="text" className="form-control" name="postDescription" onChange={handleInputsChange} placeholder="Description" style={{height: "200px"}}/>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </form>

            </div>
        </div> */}
        {/* <div className="card-body">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Post Tiltle</label>
                    <input type="text" className="form-control" name="postTitle" onChange={handleInputsChange}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Post Description</label>
                    <input type="text" className="form-control" name="postDescription" onChange={handleInputsChange}/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary m-1">Submit</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
            </form>
        </div> */}
        </>
    )
}

export default NewPostComponent;