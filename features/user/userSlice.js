const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')


const initialState = {
    loading : false,
    users : [],
    error : ""
}

const fetchUser = createAsyncThunk('user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users').then((response =>  response.data.map(user => user.id)))
})
const userSlicer = createSlice({
    "name" : "User",
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(fetchUser.pending, (state) =>{
            state.loading = true
        }),
        builder.addCase(fetchUser.fulfilled, (state, action) =>{
            state.loading = false,
            state.user = action.payload,
            state.error = ""
        }),
        builder.addCase(fetchUser.rejected, (state, action) =>{
            state.loading = false,
            state.user = [],
            state.error = action.error.message
        })
    }
})

module.exports = userSlicer.reducer
module.exports.fetchUser = fetchUser