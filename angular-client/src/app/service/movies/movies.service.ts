import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movie } from 'src/app/models/movies/movies.model';
import { retry, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movieUrl  = 'api/movies/';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.movieUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) =>{
        console.error(error);
        return throwError(error);
      })
    )
  }

  createMovie(movie: Movie): Observable<Movie>{
    return this.http.post<Movie>(this.movieUrl, movie).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) =>{
        console.error(error);
        return throwError(error);
      })
    )
  }

  editMovie(movie: Movie):Observable<Movie>{
    let movieId = null;
    return this.http.put<Movie>(this.movieUrl + movieId, movie).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) =>{
        console.error(error);
        return throwError(error);
      })
    )
  }

  deleteMovie(movieId: number):Observable<any>{
    return this.http.delete<Movie>(this.movieUrl + movieId).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) =>{
        console.error(error);
        return throwError(error);
      })
    )
  }
}
