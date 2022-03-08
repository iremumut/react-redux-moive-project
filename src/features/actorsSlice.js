import { createSlice } from "@reduxjs/toolkit";
import { API_KEY, URL } from "../constants";
import axios from 'axios';


const actorsSlice = createSlice({
    name: "actors",
    initialState: {
        entities: { isLoading: false, actors: [] , error: "" },
    },
    reducers: {
        FETCH_ACTORS_REQUEST: (state, action) => {
            state.entities.isLoading = true
        },
        FETCH_ACTORS_SUCCESS: (state, action) => {
            state.entities.isLoading = false
            //state.entities.actors = action.payload;
            action.payload.forEach((actor) => {
                if(!state.entities.actor.include(actor)){
                state.entities.actors.push(actor)}
                });
            state.entities.error = " "
        },       
        FETCH_ACTORS_FAILURE: (state, action) => {
            state.entities.error = action.payload
            state.entities.loading = false
            state.entities.movies = []
        }
    }
});

export const { FETCH_ACTORS_SUCCESS, FETCH_ACTORS_REQUEST, FETCH_ACTORS_FAILURE} = actorsSlice.actions;


export default actorsSlice.reducer;

export const fetchPopularActors = () => {
    return (dispatch) => {
        dispatch(FETCH_ACTORS_REQUEST())
        axios.get(`movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`
        )
            .then((response) => {
                const actors = response.data.results;
                dispatch(FETCH_ACTORS_SUCCESS(actors))
            })
            .catch((error) => {
                dispatch(FETCH_ACTORS_FAILURE(error.message))
            })
    }
}