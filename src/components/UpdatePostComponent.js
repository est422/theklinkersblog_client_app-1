import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams  } from 'react-router-dom'
import { getPostById, updatePost } from '../slices/postsSlice'
import FooterComponent from './FooterComponent'

function UpdatePostComponent () {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false)
    const posts = useSelector((state) => state.postsSlice.posts)
    const post = posts.filter(p => { return p.postId === parseInt(id) })
    const [updatedPost, setUpdatedPost] = useState({
        postTitle: '',
        postDescription: '',
        // postDate: '',
        postImage: '',
        postCategory: '',
        // postLikes: '',
        // postDislikes: '',
    })
    const [file, setFile] = useState([]);
    // const [title, setTitle] = useState(post.postTitle)
    // const [description, setDescription] = useState(post.postDescription)

    const navigate = useNavigate()
    const handleClose = (event) => {
        event.preventDefault()
        navigate("/blogs")
    }

    const handleInputsChange = (e) => {
        e.preventDefault()
        setUpdatedPost({...updatedPost, [e.target.name]: e.target.value})
        
    }

    function handleChange(e) {
        setFile(e.target.files[0])
        setUpdatedPost({...updatedPost, [e.target.name]: e.target.value})
        // console.log(e.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        let formData = new FormData()

        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else if (form.checkValidity() === true) {
            formData.append('postImage', file)
            formData.append('postTitle', updatedPost.postTitle)
            formData.append('postDescription', updatedPost.postDescription)
            formData.append('postCategory', updatedPost.postCategory)
            // formData.append('postDate', updatedPost.postDate)
            // formData.append('postLikes', updatedPost.postLikes)
            // formData.append('postDislikes', updatedPost.postDislikes)
            // console.log("file", updatedPost.postImage)
            dispatch(updatePost({id, formData}))
            .then(res => navigate("/blogs"))
            .catch(err => console.log(err))
            // dispatch(updatePost({id, updatedPost}))
            // setValidated(true)
        }
        setValidated(true)
        
    }

    useEffect(() => {
        dispatch(getPostById(id))
        .then(res => {setUpdatedPost({...updatedPost,  
            postTitle: res.payload[0].postTitle,
            postDescription: res.payload[0].postDescription,
            // postDate: res.payload[0].postDate,
            postImage: res.payload[0].postImage,
            postCategory: res.payload[0].postCategory,
            // postLikes: res.payload[0].postLikes,
            // postDislikes: res.payload[0].postDislikes
        })})
        .catch(err => err)
        console.log("updatedPost", updatedPost)
        // setUpdatedPost(post)
    }, []) 

    return(
        <>
        <section id="contact" className="contact">
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Edit post</h5>
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-lg-6">
                            <input type="text" className="form-control" name="postTitle" onChange={handleInputsChange} value={updatedPost.postTitle} placeholder="Title"/>
                            </div>
                            <div className="col-lg-6">
                            <select id="inputState" className="form-select" name="postCategory" onChange={handleInputsChange} value={updatedPost.postCategory}>
                            <option>Choose category</option>
                                <option value="PPR Pipe and Fitting">PPR Pipe and Fitting</option>
                                <option value="Construction Chemicals">Construction Chemicals</option>
                                <option value="Sanitary Ware">Sanitary Ware</option>
                                <option value="Paint">Paint</option>
                                <option value="Door Locks">Door Locks</option>
                                <option value="Ceramic Tiles">Ceramic Tiles</option>
                                <option value="SPC, UV Board and PVC Celling">SPC, UV Board and PVC Celling</option>
                            </select>
                            </div>
                            <div className="col-lg-12">
                            <textarea type="text" className="form-control" name="postDescription" onChange={handleInputsChange} value={updatedPost.postDescription} placeholder="Description" style={{height: "200px"}}/>
                            </div>
                            <div className="col-lg-12">
                            <input type="file" className="form-control" name="postImage" onChange={handleChange}/>
                            </div>
                            <div className="text-center">
                            <button type="submit" className="btn btn-primary m-1">Submit</button>
                            <button type="reset" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
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

export default UpdatePostComponent;