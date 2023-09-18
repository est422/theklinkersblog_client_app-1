import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { createPost } from '../slices/postsSlice'
import FooterComponent from './FooterComponent'

function NewPostComponent () {

    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false)
    const [post, setPost] = useState({})
    const error = useSelector((state) => state.postsSlice.error)
    const isLoading = useSelector((state) => state.postsSlice.isLoading)
    // const date = new Date().toISOString().slice(0, 19).replace('T', ' ')

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

    useEffect(() => {
        // dispatch(getAllPosts())
        // console.log(posts)
    }, [])

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
                 : null}
        <section id="contact" className="contact">
            <div className="container pt-5">

                <div className="row justify-content-center">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">New post</h5>
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-lg-6">
                            <input type="text" className="form-control" name="postTitle" onChange={handleInputsChange} placeholder="Title"/>
                            </div>
                            <div className="col-lg-6">
                            <select id="inputState" className="form-select" name="postCategory" onChange={handleInputsChange}>
                                <option>Choose category</option>
                                <option value="Ppr">Ppr</option>
                                <option value="ConstructionChemicals">Construction Chemicals</option>
                                <option value="SanitaryWare">Sanitary Ware</option>

                            </select>
                            </div>
                            <div className="col-lg-12">
                            <textarea type="text" className="form-control" name="postDescription" onChange={handleInputsChange} placeholder="Description" style={{height: "200px"}}/>
                            </div>
                            <div className="text-center">
                            <button type="submit" className="btn btn-primary m-1">Submit</button>
                            <button type="reset" className="btn btn-secondary" onClick={handleClose}>Reset</button>
                            </div>
                        </form>

                        </div>
                    </div>
                </div>
            </div>    
        </section>
        <FooterComponent />     
        </>
    )
}

export default NewPostComponent;