import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate  } from 'react-router-dom'
import { Link } from 'react-router-dom'
import postsSlice, { filterByCategory, getAllPosts, getPostsByCategory, searchFilter, updateDislikePost, updateLikePost } from '../slices/postsSlice'
import { authSlice } from '../slices/authSlice'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'


function BlogsComponent () {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.authSlice.loggedIn)
    const posts = useSelector((state) => state.postsSlice.posts)
    const error = useSelector((state) => state.postsSlice.error)
    const isLoading = useSelector((state) => state.postsSlice.isLoading)
    const [noOfPosts, setNoOfPosts] = useState(2)
    // let startPostsIndex = 0
    const [updatedPost, setUpdatedPost] = useState({
        postId: '',
        postImage: '',
        postTitle: '',
        postDescription: '',
        postCategory: '',
        postDate: '',
        postLikes: '',
        postDislikes: '',
        userId: ''
    })

    const navigate = useNavigate()

    const handleNextBtnClick = () => {
        setNoOfPosts(noOfPosts + 2)
        // startPostsIndex = + 2
    }

    const handlePrevBtnClick = () => {
        setNoOfPosts(noOfPosts - 2)
        // startPostsIndex = - 2
    }
    // const handleSearchInputChange = (e) => {
    //     e.preventDefault()
    //     setSearchInput({...searchInput, searchInput: e.target.value})

    // }

    // const handleSearchFilter = (e) => {
    //     e.preventDefault()
    //     dispatch(searchFilter(searchInput))
    // }

    const handleFilterByCategory = (e) => {
        // e.preventDefault()
        // const filterPosts = posts.filter(p => {return p.postCategory === e})
        // console.log(e, `filterpost ${filterPosts.postCategory}`)
        dispatch(getPostsByCategory(e))
    }

    const handleDislikeBtnClick = (id) => {
        // const post = posts.filter(p => { return p.postId === parseInt(id) })
        dispatch(updateDislikePost(id))
        navigate("/blogs")

    }

    const handleLikeBtnClick = (id) => {
        // const post = posts.filter(p => { return p.postId === parseInt(id) })                
        dispatch(updateLikePost(id))
        navigate("/blogs")
    }

    useEffect(() => {
        dispatch(getAllPosts())
        // console.log(posts)
    }, [isLoggedIn])

    useEffect(() => {
        // dispatch(getAllPosts())
        // console.log("sec", filterPosts)
    }, [posts, isLoading, error, noOfPosts])


    return(
        <>
        <HeaderComponent />
        
        <section className="inner-page">
        <div id="blog" className="blog">
            <div className="container" data-aos="fade-up">
                
            {isLoading ? 
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status"></div>
            </div> : null}
            {!isLoading && error ? 
                <div className="col-lg-12 justify-content-center entries">

                    <article className="entry">

                    <h2 className="entry-content text-center">
                        <a href="blog-single.html">{error}</a>
                    </h2>

                    </article>

                </div>
                 : null}

                { !isLoading && !error ?
                <div className="row gy-4 posts-list">
                    <div className="blog container pb-4">

                        <div className="category-btns-scroller py-2 mb-2">
                            <div className="category-btns d-flex justify-content-between">
                            <button className="p-2 btn btn-secondary" onClick={(e) => {handleFilterByCategory("PPR Pipe and Fitting")}}>PPR Pipe and Fitting</button>
                            <button className="p-2 btn btn-secondary" onClick={(e) => {handleFilterByCategory("Construction Chemicals")}}>Construction Chemicals</button>
                            <button className="p-2 btn btn-secondary" onClick={(e) => {handleFilterByCategory("Sanitary Ware")}}>Sanitary Ware</button>
                            <button className="p-2 btn btn-secondary" onClick={(e) => {handleFilterByCategory("Paint")}}>Paint</button>
                            <button className="p-2 btn btn-secondary" onClick={(e) => {handleFilterByCategory("Door Locks")}}>Door Locks</button>
                            <button className="p-2 btn btn-secondary" onClick={(e) => {handleFilterByCategory("Ceramic Tiles")}}>Ceramic Tiles</button>
                            <button className="p-2 btn btn-secondary" onClick={(e) => {handleFilterByCategory("SPC, UV Board and PVC Celling")}}>SPC, UV Board and PVC Celling</button>
                            </div>  
                        </div>
                    </div>
                    {posts.length === 0 ?
                        <div className="col-lg-12 justify-content-center entries">

                            <article className="entry">

                            <h2 className="entry-content text-center">
                                <a href="blog-single.html">Oops there's Nothing to display!</a>
                            </h2>

                            </article>

                        </div> : null}
                        {posts.slice(0, noOfPosts).map((post, i) => (
                        <div key={i} className="col-lg-6 entries">

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
                                <li className="d-flex align-items-center"><i className="bi bi-hand-thumbs-down-fill"><span>{post.postDislikes}</span></i></li>
                                <li className="d-flex align-items-center"><i className="bi bi-hand-thumbs-up-fill"><span>{post.postLikes}</span></i></li>
                                {isLoggedIn ? <li className="d-flex align-items-center"><i className="bi bi-pencil"></i><Link to={`/blogs/edit/${post.postId}`}>Edit</Link></li> : null }
                                {isLoggedIn ? <li className="d-flex align-items-center"><i className="bi bi-trash3"></i><Link to={`/blogs/delete/${post.postId}`}>Delete</Link></li> : null}
                                </ul>
                            </div>

                            <div className="entry-content">
                                <p>
                                {post.postDescription.substring(0, 200)}
                                {/* {post.postDescription} */}
                                </p>
                                <div className="read-more">
                                <Link to={`/post/${post.postId}`}>Read More</Link>
                                </div>
                            </div>

                            </article>
                        </div>))} 
                        <div className="blog-pagination pt-4">
                        <ul className="justify-content-center">
                            {noOfPosts < posts.length ? <li><button className='read-more' onClick={() => {handleNextBtnClick()}}>Load More...</button></li> 
                            : noOfPosts !== posts.length && posts.length !== 1 ? <li><button className='read-more' onClick={() => {handlePrevBtnClick()}}>Load Less...</button></li> : null}
                        </ul>
                        </div>
                    </div> : null}
            </div>
           </div> 
        </section>

        <FooterComponent />
        </>
    )
}

export default BlogsComponent;