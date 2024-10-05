import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice"

const myStore = configureStore({
    reducer: {
        list: postReducer,
    }
})

export default myStore

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;