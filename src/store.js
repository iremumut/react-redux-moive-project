import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        //actor: actorsReducer
    }
})

export default store;