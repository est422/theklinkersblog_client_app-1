import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams  } from 'react-router-dom'
import { deletePost } from '../slices/postsSlice'

function DeletePostComponent () {

    const { id } = useParams()
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postsSlice.posts)
    const post = posts.filter(p => { return p.postId === parseInt(id) })

    const navigate = useNavigate()
    const handleClose = () => {
        // event.preventDefault()
        navigate(-1)
    }

    const handleDelete = (id) => {
        // console.log(`delete post id ${id}`)
        dispatch(deletePost(id))
        handleClose()
    }

    useEffect(() => {
        // console.log("delete post id", id)
    }, [id]) 

    return(
        <>
        <section id="contact" className="contact">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Delete Post</h5>
                    <p>Are you sure you want to delete this post</p>
                    {post.map(p => (
                    <div key={p.postId}>
                        <p>{p.postTitle}</p>
                        <p>{p.postDescription}</p>
                    </div>
                    ))}

                    
                    <button type="button" onClick={() => { handleDelete(id) }} className="btn btn-primary m-1">
                        Delete
                    </button>
                    <button type="button" onClick={() => { handleClose() }} className="btn btn-primary m-1">
                        Cancel
                    </button>
                    <div className="modal fade" id="scrollingModal" tabIndex="-1">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title">${post.postTitle}</h5>
                            <button type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            ${post.postDescription}
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => {handleDelete(parseInt(id))}}>Delete</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </section>    
        </>
    )
}

export default DeletePostComponent;