const createSlice = require('@reduxjs/toolkit').createSlice

const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk


const initialState = {
    loading: false,
    users: [],
    error:''
}

// Async thunk accept two parameters -> action name, action function
// !! thunk will automatically dispatch lifecycle actions based on the returned promise, promice is either -> pending, fulfilled or rejected.
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    console.log("Hit Api");
    return 'Hello world'
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    // extraReducers: builder => {
    //     builder.addCase(fetchUsers.pending, state => {
    //         state.loading =true
    //     })
    //     builder.addCase(fetchUsers.fulfilled, (state,action) => {
    //         state.loading = false
    //         state.users = action.payload
    //         state.error=''
    //     })
    //     builder.addCase(fetchUsers.rejected, (state, action) => {
    //         state.loading = false
    //         state.users = []
    //         state.error = action.error.message
    //     })
    // }

    //or
    extraReducers: {
        [fetchUsers.pending]: (state,action) => {
            state.loading = true
        },
        [fetchUsers.fulfilled]: (state,action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        },
        [fetchUsers.rejected]: (state,action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        },
    }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers;