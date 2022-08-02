// !! slice here is a redux-toolkit convention;

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCake:10
}
// createSlice accept a obj parameter and in this object we specify 3 properties;
const cakeSlice = createSlice({
    name: 'cake', // name for the slice;
    initialState, // initial state for individual slice
    reducers: {
        // within this obj we specify inidividual transitions
        ordered: (state,action) => {
            // we don't have to explicitly return the new state, and we can directly mutate the state (under the hood immer works)
            state.numOfCake--;
        },
        restocked: (state,action) => {
            state.numOfCake += action.payload        
        }
        // !! well create slice will automatically generate action creators with the same names as the reducer functions we have written
    }//reducer function
});

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions;

// slice effectively takes care of defining an action type constant, action object, action creators, the switch statement in reducer and handling immutable updates;