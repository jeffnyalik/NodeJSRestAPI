import { Movie } from './../models/movies/movies.model';
import { createAction, props }  from '@ngrx/store';

export const getMovies = createAction('[Movie] GET Movies',
  // props<{movies: ReadonlyArray<Movie>}>()
);
export const getMoviesSuccess = createAction('[Movies] GET movies success',
  props<{movies: ReadonlyArray<Movie>}>()
)
export const addMovies = createAction('[Movie] POST movie', props<{movie: Movie}>());
export const addMovieSuccess = createAction('[Movie] Add movie success', props<{movie: Movie}>());
