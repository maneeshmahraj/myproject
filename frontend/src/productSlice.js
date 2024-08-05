import {createSlice} from '@reduxjs/toolkit';

const productSlice=createSlice({
    name:"furniture",
    
    initialState:{

         items:[]
    },
    reducers:{
        addItems:(state,action)=>{
         state.items.push(action.payload);
         state.items=state.items.filter((val,index)=>{return index ===state.items.findIndex(o=>val.id===o.id)});
         console.log(state.items);

        }

    }

})
export const {addItems}=productSlice.actions;
export default productSlice.reducer;

