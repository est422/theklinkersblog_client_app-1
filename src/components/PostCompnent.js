import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams  } from 'react-router-dom'
import FooterComponent from './FooterComponent'
import { Link } from "react-router-dom";
import HeaderComponent from './HeaderComponent';


function PostComponent () {

    const { id } = useParams()
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postsSlice.posts)
    const post = posts.filter(p => { return p.postId === parseInt(id) })

    return(
        <>
        <HeaderComponent />
        {post.map((post, i) => (<div className="col-lg-12 entries">

            <article key={i} className="entry">

                <div className="entry-img">
                    {/* <img src={`https://theklinkers-blog-backend.onrender.com/images/${post.postImage}`} alt="" className="img-fluid" /> */}
                    <img src={`http://localhost:9000/images/${post.postImage}`} alt="" className="img-fluid" />
                </div>

                <h2 className="entry-title">
                    <a href="blog-single.html">{post.postTitle}</a>
                </h2>

                <div className="entry-meta">
                    <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i>{new Date(post.postDate).toISOString().substring(0, 10)}</li>
                    <li className="d-flex align-items-center"><i class="bi bi-hand-thumbs-up-fill"></i></li>
                    <li className="d-flex align-items-center"><i class="bi bi-hand-thumbs-down-fill"></i></li>
                    </ul>
                </div>

                <div className="entry-content">
                    <p>
                    {post.postDescription.substring(0, 200)}
                    {/* {post.postDescription} */}
                    </p>
                </div>

                </article>
            </div>))}
            <FooterComponent />
        </>
    )
}

export default PostComponent;