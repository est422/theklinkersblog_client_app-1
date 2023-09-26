import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: [],
  isLoading: false,
  error: ''
}

export const getAllPosts = createAsyncThunk('posts/getAll', async () => {
    return await axios.get('http://localhost:9000/api/posts')
    // return await axios.get('https://theklinkers-blog-backend.onrender.com/api/posts')
    .then((response) => response.data)
})

export const createPost = createAsyncThunk('posts/create', async (formData) => {
  console.log("slicepost", formData )
  return await axios.post('http://localhost:9000/api/posts/create', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  // return await axios.post('https://theklinkers-blog-backend.onrender.com/api/posts/create', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  .then((response) => response.data)
})

export const updatePost = createAsyncThunk('posts/update', async ({id, updatedPost}) => {

  console.log(`slice post ${updatedPost.postTitle, updatePost.postDescription}`)
  return await axios.put(`http://localhost:9000/api/posts/update/${id}`, updatedPost)
  // return await axios.put(`https://theklinkers-blog-backend.onrender.com/api/posts/update/${id}`, updatedPost)
  .then((response) => response.data)

})

export const deletePost = createAsyncThunk('posts/delete', async (id) => {

  console.log(id)

  return await axios.delete(`http://localhost:9000/api/posts/delete/${id}`)
  // return await axios.delete(`https://theklinkers-blog-backend.onrender.com/api/posts/delete/${id}`)
  .then((response) => response.data)

})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      console.log("payload", action.payload.searchInput)
      state.isLoading = false
      state.posts = state.posts.filter(p => {return p.postTitle === action.payload.searchInput})
      state.error = ''

    },
    filterByCategory: (state, action) => {
      // console.log("payload", action.payload.filterPost)
      state.isLoading = false
      // state.posts = state.posts.filter(p => {return p.postCategory === action.payload.filterPost})
      state.error = ''

    }
  },
  extraReducers: (builder) => {
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
      builder.addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(createPost.fulfilled, (state, action) => {
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