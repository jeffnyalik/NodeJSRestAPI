import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmptyError, exhaustMap, map } from 'rxjs';
import { getMovies, getMoviesSuccess } from '../actions/movies.action';
import { MoviesService } from '../service/movies/movies.service';

@Injectable()

export class MovieEffects{
  loadMovie$ = createEffect(() =>(
    this.actions$.pipe(
      ofType(getMovies),
      exhaustMap(() =>
        this.mvService.getMovies().pipe(
          map((movies) => getMoviesSuccess({movies}))
        )
      )
    )
  ));

  
  constructor(private actions$: Actions, private mvService: MoviesService){}
}
