import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate  } from 'react-router-dom'
import { Link } from 'react-router-dom'
import postsSlice, { filterByCategory, getAllPosts, searchFilter } from '../slices/postsSlice'
import { authSlice } from '../slices/authSlice'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

function BlogsComponent () {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.authSlice.loggedIn)
    const posts = useSelector((state) => state.postsSlice.posts)
    const error = useSelector((state) => state.postsSlice.error)
    const isLoading = useSelector((state) => state.postsSlice.isLoading)
    const [searchInput, setSearchInput] = useState()
    const [filterPosts, setFilterPosts] = useState()

    const navigate = useNavigate()

    const handleSearchInputChange = (e) => {
        e.preventDefault()
        setSearchInput({...searchInput, searchInput: e.target.value})

    }

    const handleSearchFilter = (e) => {
        e.preventDefault()
        // setFilterPosts({...filterPosts, filterPosts: posts.filter(p => { return p.postTitle === searchInput.searchInput})})
        // console.log(searchInput.searchInput)
        dispatch(searchFilter(searchInput))
    }

    const handleFilterByCategory = (value) => {
        // e.preventDefault()
        setFilterPosts({...filterPosts, filterPosts: value})
        console.log(filterPosts)
        // dispatch(filterByCategory(filterPosts))
    }

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

    useEffect(() => {
        // dispatch(getAllPosts())
        // console.log(posts)
    }, [posts, isLoading, error])


    return(
        <>
        <HeaderComponent />
        
        <section className="inner-page">
        <div id="blog" className="blog">
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
                 : 
                 <div className="blog container pb-4">
                    <div className="blog-header py-2">
                            {/* <div className="row flex-nowrap justify-content-between align-items-center">
                            <div className="col-lg-12 blog sidebar search-form">
                                <form action="">
                                <input type="text" />
                                <button type="submit"><i className="bi bi-search"></i></button>
                                </form>
                            </div>
                            </div> */}
                        <div className='row'>
                            <div className="col-lg-12 search-form">
                                <form action="">
                                <input type="text" name='searchFiltter' onChange={handleSearchInputChange}/>
                                <button type="submit" onClick={handleSearchFilter}><i className="bi bi-search"></i></button>
                                </form>
                            </div>                            
                        </div>
                        </div>

                        <div className="nav-scroller py-2 mb-2">
                            <div className="nav d-flex justify-content-between">
                            <button className="p-2 btn btn-none" onClick={handleFilterByCategory} name="PPR Pipe and Fitting">PPR Pipe and Fitting</button>
                            <button className="p-2 btn btn-none" onClick={handleFilterByCategory} name="Construction Chemicals">Construction Chemicals</button>
                            <button className="p-2 btn btn-none" onClick={handleFilterByCategory} name="Sanitary Ware">Sanitary Ware</button>
                            <button className="p-2 btn btn-none" onClick={handleFilterByCategory} name="Paint">Paint</button>
                            <button className="p-2 btn btn-none" onClick={handleFilterByCategory} name="Door Locks">Door Locks</button>
                            <button className="p-2 btn btn-none" onClick={handleFilterByCategory} name="Ceramic Tiles">Ceramic Tiles</button>
                            <button className="p-2 btn btn-none" onClick={handleFilterByCategory} name="SPC, UV Board and PVC Celling">SPC, UV Board and PVC Celling</button>
                            
                        </div>
                    </div>
                </div>}
                
                {/* <div className="p-4 p-md-5 mb-4 text-white rounded bg-light image-fluid" style={{backgroundImage: "url('assets/images/slider/slide-1.jpg')"}}>
                    <div className="col-lg-12 px-0">
                    <h1 className="display-4 fst-italic">Welcome to our blog</h1>
                    </div>
                </div> */}
                {/* <div className='row'>
                    <div className="sidebar">

                        <div className="col-lg-12 search-form">
                            <form action="">
                            <input type="text" />
                            <button type="submit"><i className="bi bi-search"></i></button>
                            </form>
                        </div>                            
                    </div>
                </div> */}
                
                <div className="row gy-4 posts-list">
                    
                    {posts.map((post, i) => (<div key={i} className="col-lg-6 entries">

                    <article className="entry">

                        <div className="entry-img">
                            <img src={`https://theklinkers-blog-backend.onrender.com/images/${post.postImage}`} alt="" className="img-fluid" />
                        </div>

                        <h2 className="entry-title">
                            <a href="blog-single.html">{post.postTitle}</a>
                        </h2>

                        <div className="entry-meta">
                            <ul>
                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i>{new Date(post.postDate).toISOString().substring(0, 10)}</li>
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
                            <a href="blog-single.html">Read More</a>
                            </div>
                        </div>

                        </article>
                    </div>))} 

                </div>

                <div className="blog-pagination pt-4">
                <ul className="justify-content-center">
                    <li><a>Previous</a></li>
                    <li><a>Next</a></li>
                </ul>
                </div>

            </div>
            </div>
            </section>

        {/* <main id='main'>
            <section id="blog" className="blog">
                <div className="container pt-5" data-aos="fade-up">
                {isLoading && 
                <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status"></div>
                </div> }
                {!isLoading && error ? 
                <div className="col-lg-6 justify-content-center entries">

                    <article className="entry">

                    <h2 className="entry-content text-center">
                        <a href="blog-single.html">{error}</a>
                    </h2>

                    </article>

                </div>
                 : null}
                <div className="row">           */}

                {/* {posts.map((post, i) => (<div className="col-lg-12 entries">

                    <article key={i} className="entry">

                        <div className="entry-img">
                            <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
                        </div>

                        <h2 className="entry-title">
                            <a href="blog-single.html">{post.postTitle}</a>
                        </h2>

                        <div className="entry-meta">
                            <ul>
                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i>{post.postDate}</li>
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

                        </article>
                    </div>))} */}
                    {/* {!error ? <div className="col-lg-4">

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

                        </div> : null} */}
                    {/* </div> 

                </div>
            </section> */}
        {/* </main> */}
        <FooterComponent />
        </>
    )
}

export default BlogsComponent;