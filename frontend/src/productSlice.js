import {createSlice} from '@reduxjs/toolkit';

const productSlice=createSlice({
    name:"furniture",
    
    initialState:{

         items:[]
    },
    reducers:{
        addItems:(state,action)=>{

        }
    }
})
export const {addItems}=productSlice.actions;
export default productSlice.reducer;

