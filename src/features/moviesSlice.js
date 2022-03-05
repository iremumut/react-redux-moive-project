import { createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../constants";
import axios from 'axios';

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        entities: { isLoading: false, movies: []/*{trendingMovies: [], popularMovies: [], allMovies: []}*/, error: "" },
    },
    reducers: {
        FETCH_MOVIES_REQUEST: (state, action) => {
            state.entities.isLoading = true
        },
        FETCH_MOVIES_SUCCESS: (state, action) => {
            state.entities.isLoading = false
            state.entities.movies = action.payload
            state.entities.error = " "
        },
        FETCH_MOVIES_FAILURE: (state, action) => {
            state.entities.error = action.payload
            state.entities.loading = false
            state.entities.movies = []
        }
    }
});

// export the action creators
export const { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } = moviesSlice.actions;

export default moviesSlice.reducer;

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(FETCH_MOVIES_REQUEST())
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
            .then((response) => {
                const movies = response.data.results;
                //console.log(response);
                dispatch(FETCH_MOVIES_SUCCESS(movies))
            })
            .catch((error) => {
                dispatch(FETCH_MOVIES_FAILURE(error.message))
            })
    }
}