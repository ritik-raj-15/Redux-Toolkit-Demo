const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecreams:20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state,action) => {
           state.numOfIcecreams--;
        },
        restocked: (state,action) => {
            state.numOfIcecreams += action.payload        
        }
    },
    extraReducers: { // it allows slice to respond to other action types; or we can use builder.addCase 
        ['cake/ordered']: (state,action) => {
            state.numOfIcecreams--;
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.icecreamActions = iceCreamSlice.actions;