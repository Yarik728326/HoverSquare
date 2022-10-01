import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./appDataSlice";

export const store = configureStore({
    reducer: {
        data: dataSlice
    }
})