// @flow
import * as React from "react";
import styled from "styled-components";
import {colorPalette} from '../utils/style';

const api_img = "https://image.tmdb.org/t/p/w200/";

const Wrapper = styled.div`
  & div {
    display: flex;
    justify-content: center;
  }
`;
const Poster = styled.img`
  opacity: 0.7;
  margin-bottom: 20px;
  &:hover {
    opacity: 1;
  }
`;
const Title = styled.div`
  margin-bottom: 10px;
  color: white;
`;
const Date = styled.div`
  font-size:12px;
  color: ${colorPalette.greyBlue};
`;

type Props = {
  original_title: string,
  poster_path: string,
  release_date: string
};
const MovieCard = (props: Props) => {
  return (
    <Wrapper>
      <Poster src={`${api_img}${props.poster_path}`} />
      <Title>{props.original_title}</Title>
      <Date>{props.release_date}</Date>
    </Wrapper>
  );
};

export default MovieCard;
