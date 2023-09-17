import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate  } from 'react-router-dom'
import { Link } from 'react-router-dom'
import postsSlice, { getAllPosts } from '../slices/postsSlice'
import { authSlice } from '../slices/authSlice'
import FooterComponent from './FooterComponent'

function BlogsComponent () {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.authSlice.loggedIn)
    const posts = useSelector((state) => state.postsSlice.posts)
    const error = useSelector((state) => state.postsSlice.error)
    const isLoading = useSelector((state) => state.postsSlice.isLoading)

    const navigate = useNavigate()
    const handleUpdatePost = (postId) => {
        navigate(`/blogs/edit/${postId}`)
    }
    const handleDeletePost = (postId) => {
        navigate(`/blogs/delete/${postId}`)
    }

    useEffect(() => {
        dispatch(getAllPosts())
        // console.log(posts)
    }, [isLoggedIn])


    return(
        <>
        <main id='main'>
            <section id="blog" className="blog">
                <div className="container" data-aos="fade-up">
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
                <div className="row">          

                    <div className="col-lg-8 entries">

                    {posts.map((post, i) => (<article key={i} className="entry">

                        <div className="entry-img">
                            <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
                        </div>

                        <h2 className="entry-title">
                            <a href="blog-single.html">{post.postTitle}</a>
                        </h2>

                        <div className="entry-meta">
                            <ul>
                            {/* <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li> */}
                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i><time dateTime="2020-01-01">Jan 1, 2020</time></li>
                            {/* <li className="d-flex align-items-center"><i className="bi bi-pencil"></i><Link to={`/blogs/edit/${post.postId}`}>Edit</Link></li>
                            <li className="d-flex align-items-center"><i className="bi bi-trash3"></i><Link to={`/blogs/delete/${post.postId}`}>Delete</Link></li> */}
                            {isLoggedIn ? <li className="d-flex align-items-center"><i className="bi bi-pencil"></i><Link to={`/blogs/edit/${post.postId}`}>Edit</Link></li> : null }
                            {isLoggedIn ? <li className="d-flex align-items-center"><i className="bi bi-trash3"></i><Link to={`/blogs/delete/${post.postId}`}>Delete</Link></li> : null}
                            </ul>
                        </div>

                        <div className="entry-content">
                            <p>
                            {post.postDescription}
                            </p>
                            <div className="read-more">
                            <a href="blog-single.html">Read More</a>
                            </div>
                        </div>

                        </article>))}
                    </div>
                    <div className="col-lg-4">

                        <div className="sidebar">

                        <h3 className="sidebar-title">Search</h3>
                        <div className="sidebar-item search-form">
                            <form action="">
                            <input type="text" />
                            <button type="submit"><i className="bi bi-search"></i></button>
                            </form>
                        </div>

                        <h3 className="sidebar-title">Categories</h3>
                        <div className="sidebar-item categories">
                            <ul>
                            <li><a href="#">Ppr <span>(25)</span></a></li>
                            <li><a href="#">Construction Chemicals <span>(12)</span></a></li>
                            <li><a href="#">Sanitary Ware <span>(5)</span></a></li>
                            </ul>
                        </div>

                        </div>

                        </div>
                        </div>

                </div>
            </section>
        </main>
        <FooterComponent />
        </>
    )
}

export default BlogsComponent;