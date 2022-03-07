import { createSlice } from "@reduxjs/toolkit";
import { API_KEY, URL } from "../constants";
import axios from 'axios';

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        entities: { isLoading: false, allMovies: {popularMovies: [], topRatedMovies: [], upcomingMovies: [], trendingMovies:[] }, error: "" },
    },
    reducers: {
        FETCH_MOVIES_REQUEST: (state, action) => {
            state.entities.isLoading = true
        },
        FETCH_POPULAR_MOVIES_SUCCESS: (state, action) => {
            state.entities.isLoading = false
            state.entities.allMovies.popularMovies = action.payload
            state.entities.error = " "
        },
        FETCH_TOP_RATED_MOVIES_SUCCESS: (state, action) => {
            state.entities.isLoading = false
            state.entities.allMovies.topRatedMovies = action.payload
            state.entities.error = " "
        },
        FETCH_UPCOMING_MOVIES_SUCCESS: (state, action) => {
            state.entities.isLoading = false
            state.entities.allMovies.upcomingMovies = action.payload
            state.entities.error = " "
        },
        FETCH_TRENDING_MOVIES_SUCCESS: (state, action) => {
            state.entities.isLoading = false
            state.entities.allMovies.trendingMovies = action.payload
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
export const { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_POPULAR_MOVIES_SUCCESS , FETCH_UPCOMING_MOVIES_SUCCESS, FETCH_TOP_RATED_MOVIES_SUCCESS, FETCH_TRENDING_MOVIES_SUCCESS} = moviesSlice.actions;

export default moviesSlice.reducer;


export const fetchPopularMovies = () => {
    return (dispatch) => {
        dispatch(FETCH_MOVIES_REQUEST())
        axios.get(`${URL}movie/popular?api_key=${API_KEY}`
        )
            .then((response) => {
                const movies = response.data.results;
                dispatch(FETCH_POPULAR_MOVIES_SUCCESS(movies))
            })
            .catch((error) => {
                dispatch(FETCH_MOVIES_FAILURE(error.message))
            })
    }
}
export const fetchTopRatedMovies = () => {
    return (dispatch) => {
        dispatch(FETCH_MOVIES_REQUEST())
        axios.get(`${URL}movie/top_rated?api_key=${API_KEY}`
        )
            .then((response) => {
                const movies = response.data.results;
                dispatch(FETCH_TOP_RATED_MOVIES_SUCCESS(movies))
            })
            .catch((error) => {
                dispatch(FETCH_MOVIES_FAILURE(error.message))
            })
    }
}
export const fetchUpcomingMovies = () => {
    return (dispatch) => {
        dispatch(FETCH_MOVIES_REQUEST())
        axios.get(`${URL}movie/upcoming?api_key=${API_KEY}`
        )
            .then((response) => {
                const movies = response.data.results;
                dispatch(FETCH_UPCOMING_MOVIES_SUCCESS(movies))
            })
            .catch((error) => {
                dispatch(FETCH_MOVIES_FAILURE(error.message))
            })
    }
}
export const fetchTrendingMovies = () => {
    return (dispatch) => {
        dispatch(FETCH_MOVIES_REQUEST())
        axios.get(`${URL}trending/movie/week?api_key=${API_KEY}`
        )
            .then((response) => {
                const movies = response.data.results;
                dispatch(FETCH_TRENDING_MOVIES_SUCCESS(movies))
            })
            .catch((error) => {
                dispatch(FETCH_MOVIES_FAILURE(error.message))
            })
    }
}