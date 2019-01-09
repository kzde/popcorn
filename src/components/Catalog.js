// @flow
import * as React from 'react';
import data from '../data/movies.json';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import {colorPalette} from '../utils/style';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 15px;
  background-color: ${colorPalette.darkBlue};
`;

const Catalog = ()=> {
  const movies = data.results;
  return (
      <Wrapper>
      {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            original_title={movie.title} 
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))
      }
      </Wrapper>
  )
} 

export default Catalog;