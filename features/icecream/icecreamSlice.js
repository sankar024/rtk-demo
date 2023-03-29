const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numberOfIcecream : 5
}

const iceCreamSlice = createSlice({
    name : "Ice Cream",
    initialState,
    reducers:{
        ordered:(state) =>{
            state.numberOfIcecream--
        },
        reOrdered:(state, action ) =>{
            state.numberOfIcecream += action.payload
        },
        extraReducers :(builder) =>{
            builder.addCase(cakeActions.ordered, (state) =>{
                state.numberOfIcecream--
            })
        }
    }
})

module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions