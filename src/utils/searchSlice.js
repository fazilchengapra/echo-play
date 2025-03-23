import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        resultCache: (state, action) => {
            return {...action.payload, ...state}
        },
        removeLast: (state) => {
            const newState = {...state}
            delete newState[Object.keys(newState).pop()]
            return newState
        },
        movetoTop: (state, action) => {
            const newState = {...state}
            const key = Object.keys(newState).find(key => key === action.payload)
            const value = newState[key]
            delete newState[key]
            return {[key]: value, ...newState}
        }
    }
})


export const {resultCache, removeLast, movetoTop} = searchSlice.actions
export default searchSlice.reducer