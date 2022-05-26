import { MovieEffects } from './effects/movie.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';

import { MovieReducer } from './reducers/movie.reducer';
import { MoviesComponent } from './components/movies/movies.component';
import { ProductsComponent } from './components/products/products.component';
import { DataServiceService } from './service/data/data-service.service';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ProductsComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataServiceService),
    StoreModule.forRoot({'movies': MovieReducer}),

    // StoreModule.forRoot({}, {}),
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    // }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
