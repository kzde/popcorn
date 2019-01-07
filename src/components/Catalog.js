// @flow
import * as React from 'react';
import data from '../data/movies.json';
import MovieCard from './MovieCard';

const Catalog = ()=> {
  const movies = data.results;

  return (
      <div>
      {
        movies.map(movie => <MovieCard key={movie.id} title={movie.title} />)
      }
      </div>
  )
} 

export default Catalog;