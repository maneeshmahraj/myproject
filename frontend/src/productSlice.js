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

        },
        decreaseqnty:(state,action)=>{
            for(var i=0;i<state.items.length;i++)
              {
                if(state.items[i].id==action.payload)
                  { 
                    if(state.items[i].quentity==1)
                    {
                      alert("you can not decrease product qnty less then 1 ")
                    }
                    else{
                      state.items[i].quentity-=1;
                    }
                  }
              }
          },
          icreaseqnty:(state,action)=>{
            for(var i=0;i<state.items.length;i++)
              {
                if(state.items[i].id==action.payload)
                  {
                    state.items[i].quentity+=1;
                  }
                 
              }
          },
          removeData:(state,action)=>{
            state.items=state.items.filter((item)=>item.id!==action.payload)
          }

    }

})
export const {addItems,decreaseqnty,icreaseqnty,removeData}=productSlice.actions;
export default productSlice.reducer;

