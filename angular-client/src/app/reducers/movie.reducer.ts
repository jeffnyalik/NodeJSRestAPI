import { Movie } from './../models/movies/movies.model';
import { createReducer, on } from '@ngrx/store';

import { getMovies, getMoviesSuccess, addMovies } from '../actions/movies.action';

export interface MovieState{
  movies: ReadonlyArray<Movie>;
};


const initialState: ReadonlyArray<Movie> = [];


export const MovieReducer = createReducer(
  initialState,
  on(getMoviesSuccess, (state, { movies }) => [...movies]),
  on(addMovies, (state, {movie}) => [...state, movie])
);
