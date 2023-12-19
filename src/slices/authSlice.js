import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  user: {},
  token: null,
  loggedIn: false,
  isLoading: false,
  error: ''
}

export const getUser = createAsyncThunk('user/getUserById', async () => {
    return await axios.get('https://theklinkers-blog-backend.onrender.com/api/users')
    .then((response) => response.data)
})

export const userLogin = createAsyncThunk('users/login', async (user) => {
  // console.log("p", post.postDescription )
  // return await axios.post({
  //   url: 'http://localhost:9000/api/posts/create',
  //   headers: {"Content-type": "application.json"},
  //   data: {postTitle: post.postTitle, postDescription: post.postDescription}
  // })
  return await axios.post('http://localhost:9000/api/users/login', {username: user.username, password: user.password})
  // return await axios.post('https://theklinkers-blog-backend.onrender.com/api/users/login', {username: user.username, password: user.password})
  .then((response) => response.data)
})

// export const userLogout = createAsyncThunk('users/logout', async () => {

// })

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.loggedIn = false
      localStorage.removeItem('token')
      state.isLoading = false
      state.error = ''

    },
  },
  extraReducers: (builder) => {
      builder.addCase(getUser.pending, (state) => {
          state.isLoading = true
      })
      builder.addCase(getUser.fulfilled, (state, action) => {
          state.isLoading = false
          state.user = action.payload
          state.error = ''
      })
      builder.addCase(getUser.rejected, (state, action) => {
          state.isLoading = false
          state.user = {}
          state.error = action.error.message
      })
      builder.addCase(userLogin.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false
        state.token = action.payload
        localStorage.setItem('token', state.token)
        state.loggedIn = true
        state.error = ''
      })
      builder.addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false
        state.token = ""
        state.loggedIn = false
        state.error = action.payload
      })
      // builder.addCase(userLogout.pending, (state) => {
      //   state.isLoading = true
      // })
      // builder.addCase(userLogout.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.loggedIn = false
      //   state.token = ""
      //   localStorage.removeItem("token")
      //   state.error = ''
      // })
      // builder.addCase(userLogout.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.loggedIn = false
      //   state.token = ""
      //   state.error = action.payload
      // })
      
  }
})

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions
// Selectors
export const { userLogout } = authSlice.actions

export default authSlice.reducer