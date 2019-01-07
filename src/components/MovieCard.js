// @flow
import * as React from 'react';

type Props = {
  title: string
};
const MovieCard = (props:Props) => {
  return (<div>{props.title}</div>)
}

export default MovieCard;