import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: {
        favList: []
    },
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        addFav: (state, action) => {
            console.log(action.payload);
            state.favList = [...state.favList, action.payload];
            
        },
        deleteFav: (state, action) => {
            state.favList = state.favList.filter((item) => item !== action.payload);
            console.log(state);
        }        
    }
})

export const { setUser, addFav, deleteFav } = user.actions
export default user.reducer