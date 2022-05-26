import { DataServiceService } from './../../service/data/data-service.service';
import { Movie } from './../../models/movies/movies.model';
import { getMovies } from './../../actions/movies.action';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addMovies } from '../../actions/movies.action';
import { MoviesService } from '../../service/movies/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  newMovie: Movie = new Movie();
  @Input() movies: Movie[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  // GET Movies
  getAllMovies = () =>{
    this.store.dispatch(getMovies());
  }

  addMovies = () =>{
    this.store.dispatch(addMovies({movie: this.newMovie}))
  }

}
