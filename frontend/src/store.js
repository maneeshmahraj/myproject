import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./productSlice";

const store=configureStore({

    reducer:{
        furniture:myreducer
    }
})
export default store;