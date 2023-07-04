import MyCartSlice from "./MyCartSlice";
import MyProductReducer from './MyProductSlice';

import { configureStore } from "@reduxjs/toolkit";

export const mystore = configureStore({
    reducer : {
        product : MyProductReducer,
        Cart : MyCartSlice,
    }
})