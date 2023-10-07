import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: [],
  post: {},
  trendingPosts: [],
  isLoading: false,
  error: ''
}

export const getPostById = createAsyncThunk('posts/getPostById', async (id) => {
  return await axios.get(`http://localhost:9000/api/posts/${id}`)
  // return await axios.get(`https://theklinkers-blog-backend.onrender.com/api/posts/${id}`)
  .then((response) => response.data)
})

export const getTrendingPosts = createAsyncThunk('posts/getTrendingPosts', async () => {
  return await axios.get("http://localhost:9000/api/posts/trending/posts")
  // return await axios.get(`https://theklinkers-blog-backend.onrender.com/api/posts/trending/posts`)
  .then((response) => response.data)
})

export const getPostsByCategory = createAsyncThunk('posts/getPostsByCategory', async (filterByCategory) => {
  return await axios.get(`http://localhost:9000/api/posts/getPostsByCategory/${filterByCategory}`)
  // return await axios.get(`https://theklinkers-blog-backend.onrender.com/api/posts/getPostsByCategory/${filterByCategory}`)
  .then((response) => response.data)
})

export const getAllPosts = createAsyncThunk('posts/getAll', async () => {
    return await axios.get('http://localhost:9000/api/posts')
    // return await axios.get('https://theklinkers-blog-backend.onrender.com/api/posts')
    .then((response) => response.data)
})

export const createPost = createAsyncThunk('posts/create', async (formData) => {
  // console.log("slicepost", formData )
  return await axios.post('http://localhost:9000/api/posts/create', formData, { headers: {'Content-Type': 'multipart/form-data', 'Authorization': localStorage.getItem('token')}})
  // return await axios.post('https://theklinkers-blog-backend.onrender.com/api/posts/create', formData, { headers: {'Authorization': localStorage.getItem('token'), 'Content-Type': 'multipart/form-data'}})
  .then((response) => response.data)
})

export const updatePost = createAsyncThunk('posts/update', async ({id, formData}) => {

  // console.log('slice post', formData.postImage)
  return await axios.put(`http://localhost:9000/api/posts/update/${id}`, formData, { headers: {'Authorization': localStorage.getItem('token'), 'Content-Type': 'multipart/form-data'}})
  // return await axios.put(`https://theklinkers-blog-backend.onrender.com/api/posts/update/${id}`, updatedPost, { headers: {'Authorization': localStorage.getItem('token'), 'Content-Type': 'multipart/form-data'}})
  .then((response) => response.data)

})

export const updateLikePost = createAsyncThunk('posts/update/like', async (id) => {

  // console.log(`slice post ${id}`)
  return await axios.put(`http://localhost:9000/api/posts/update/like/${id}`, { headers: {'Content-Type': 'application/json'}})
  // return await axios.put(`https://theklinkers-blog-backend.onrender.com/api/posts/update/like/${id}`)
  .then((response) => response.data)

})

export const updateDislikePost = createAsyncThunk('posts/update/dislike', async (id) => {

  // console.log(`slice post ${id}`)
  return await axios.put(`http://localhost:9000/api/posts/update/dislike/${id}`, { headers: {'Content-Type': 'application/json'}})
  // return await axios.put(`https://theklinkers-blog-backend.onrender.com/api/posts/update/dislike/${id}`)
  .then((response) => response.data)

})

export const deletePost = createAsyncThunk('posts/delete', async (id) => {

  // console.log(id)

  return await axios.delete(`http://localhost:9000/api/posts/delete/${id}`, { headers: {'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token')}})
  // return await axios.delete(`https://theklinkers-blog-backend.onrender.com/api/posts/delete/${id}`, { headers: {'Authorization': localStorage.getItem('token')}})
  .then((response) => response.data)

})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      // console.log("payload", action.payload.searchInput)
      state.isLoading = false
      state.posts = state.posts.filter(p => {return p.postTitle === action.payload.searchInput})
      state.error = ''

    },
    filterByCategory: (state, action) => {
      // console.log("payload", action.payload)
      state.isLoading = false
      state.posts = state.posts.filter(p => {return p.postCategory === action.payload})
      state.error = ''

    }
  },
  extraReducers: (builder) => {
      builder.addCase(getPostById.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(getPostById.fulfilled, (state, action) => {
          state.isLoading = false
          state.post = action.payload
          state.error = ''
      })
      builder.addCase(getPostById.rejected, (state, action) => {
          state.isLoading = false
          state.post = {}
          state.error = action.error.message
      })
      builder.addCase(getTrendingPosts.pending, (state, action) => {
        state.isLoading = true
      })
      builder.addCase(getTrendingPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.trendingPosts = action.payload
        state.error = ''
      })
      builder.addCase(getTrendingPosts.rejected, (state, action) => {
        state.isLoading = false
        state.trendingPosts = []
        state.error = action.error.message
      })
      builder.addCase(getAllPosts.pending, (state) => {
          state.isLoading = true
      })
      builder.addCase(getAllPosts.fulfilled, (state, action) => {
          state.isLoading = false
          state.posts = action.payload
          state.error = ''
      })
      builder.addCase(getAllPosts.rejected, (state, action) => {
          state.isLoading = false
          state.posts = []
          state.error = action.error.message
      })
      builder.addCase(getPostsByCategory.pending, (state, action) => {
        state.isLoading = true
        state.posts = []
        state.error = ''
      })
      builder.addCase(getPostsByCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.posts = action.payload
        state.error = ''
      })
      builder.addCase(getPostsByCategory.rejected, (state, action) => {
        state.isLoading = false
        state.posts = []
        state.error = action.payload
      })
      builder.addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(createPost.fulfilled, (state, action) => {
        console.log(action.payload)
        state.isLoading = false
        // state.posts = {...state.posts, posts: action.payload}
        state.error = ''
      })
      builder.addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.posts = []
        state.error = action.payload
      })
      builder.addCase(updatePost.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false
        // state.posts = {...state.posts, posts: action.payload}
        state.error = ''
      })
      builder.addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false
        state.posts = []
        state.error = action.payload
      })
      builder.addCase(updateDislikePost.pending, (state, action) => {
        state.isLoading = true
        state.posts = []
        state.error = ''
      })
      builder.addCase(updateDislikePost.fulfilled, (state, action) => {
        state.isLoading = false
        // state.posts = {...state.posts, posts: action.payload}
        state.error = ''
      })
      builder.addCase(updateDislikePost.rejected, (state, action) => {
        state.isLoading = false
        state.posts = []
        state.error = action.payload
      })
      builder.addCase(updateLikePost.pending, (state, action) => {
        state.isLoading = true
        state.posts = []
        state.error = ''
      })
      builder.addCase(updateLikePost.fulfilled, (state, action) => {
        state.isLoading = false
        // state.posts = {...state.posts, posts: action.payload}
        state.error = ''
      })
      builder.addCase(updateLikePost.rejected, (state, action) => {
        state.isLoading = false
        state.posts = []
        state.error = action.payload
      })
      builder.addCase(deletePost.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false
        // state.posts = {...state.posts, posts: action.payload}
        state.error = ''
      })
      builder.addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false
        state.posts = []
        state.error = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const { searchFilter, filterByCategory } = postsSlice.actions
// Selectors
// export const allPatients = state => state.patients.patients;

export default postsSlice.reducer