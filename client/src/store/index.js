import {configureStore} from "@reduxjs/toolkit";
import userProvides from "./slices/userSlice";


export const store = configureStore({
    reducer: {
        user:userProvides
    }
})