import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams  } from 'react-router-dom'
import FooterComponent from './FooterComponent'
import { Link } from "react-router-dom";
import HeaderComponent from './HeaderComponent';
import postsSlice, { filterByCategory, getAllPosts, getPostsByCategory, searchFilter, updateDislikePost, updateLikePost } from '../slices/postsSlice'


function PostComponent () {

    const { id } = useParams()
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postsSlice.posts)
    const post = posts.filter(p => { return p.postId === parseInt(id) })
    const isLoggedIn = useSelector((state) => state.authSlice.loggedIn)

    const navigate = useNavigate()

    const handleDislikeBtnClick = (id) => {
        const post = posts.filter(p => { return p.postId === parseInt(id) })
        dispatch(updateDislikePost(id))
        navigate("/blogs")

    }

    const handleLikeBtnClick = (id) => {
        const post = posts.filter(p => { return p.postId === parseInt(id) })                
        dispatch(updateLikePost(id))
        navigate("/blogs")
    }

    useEffect(() => {
        // dispatch(getAllPosts())
        // console.log(posts)
    }, [isLoggedIn])

    return(
        <>
        <HeaderComponent />
        {post.map((post, i) => (
        <div key={i} className='blog entry-single d-flex justify-content-center p-1'>
            <div className="col-lg-8 entries">

                <article className="entry">

                    <div className="entry-img">
                        <img src={`https://theklinkers-blog-backend.onrender.com/images/${post.postImage}`} alt="" className="img-fluid" />
                        {/* <img src={`http://localhost:9000/images/${post.postImage}`} alt="" className="img-fluid" /> */}
                    </div>

                    <h2 className="entry-title">
                        <a href="blog-single.html">{post.postTitle}</a>
                    </h2>

                    <div className="entry-meta">
                        <ul>
                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i>{new Date(post.postDate).toISOString().substring(0, 10)}</li>
                        {/* <li className="d-flex align-items-center"><button className='btn btn-none' onClick={() => {handleDislikeBtnClick(post.postId)}}><i className="bi bi-hand-thumbs-down-fill"><span> 4</span></i></button></li>
                        <li className="d-flex align-items-center"><button className='btn btn-none' onClick={() => {handleLikeBtnClick(post.postId)}}><i className="bi bi-hand-thumbs-up-fill"><span> 2</span></i></button></li> */}
                        {isLoggedIn ? <li className="d-flex align-items-center"><i className="bi bi-pencil"></i><Link to={`/blogs/edit/${post.postId}`}>Edit</Link></li> : null }
                        {isLoggedIn ? <li className="d-flex align-items-center"><i className="bi bi-trash3"></i><Link to={`/blogs/delete/${post.postId}`}>Delete</Link></li> : null}
                        </ul>
                    </div>

                    <div className="entry-content">
                        <p>
                        {post.postDescription.substring(0, 200)}
                        {/* {post.postDescription} */}
                        </p>
                    </div>

                    </article>
            </div>
        </div>))}
        <FooterComponent />
        </>
    )
}

export default PostComponent;