import * as actionTypes from './actionTypes'

export const getPopularMovie = () => ({
    type: actionTypes.GET_LOAD_MOVIE
})

export const getInfoMovie = () => ({
    type: actionTypes.GET_LOAD_INFO_MOVIE
})

export const getLoadSearchMovies = req => ({
        type: actionTypes.GET_LOAD_SEARCH_MOVIES, 
        requestSearchMovies: req 
})

export const getSearchMovies = data => ({
    type: actionTypes.GET_SEARCH_MOVIES,
    data
})