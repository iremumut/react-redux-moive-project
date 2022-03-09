import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";
import actorsReducer from "./features/actorsSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        actors: actorsReducer
    }
})

export default store;