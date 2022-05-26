import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/models/movies/movies.model';
import { MovieState } from 'src/app/reducers/movie.reducer';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[] = [];
  
  movies$ = this.store.select('movies');
  constructor(private store: Store<MovieState>) { }

  ngOnInit(): void {
    console.log(this.movies$)
  }

}
