import React from "react";
import styled from "styled-components";

const MovieItemContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 50% 50%;
  @media only screen and (max-width: 1000px){
    grid-template-columns: 100%;
  }
`;

const MovieItemLeftSide = styled.div`
  width: 100%;
  position: relative;
`;
const MovieItemRightSide = styled.div`
  width: 100%;
`;
const ItemList = styled.li`
    color: white;
    padding: 5px 5px 5px 5px;
    text-decoration: none;
    list-style-type: none;
    font-size: 17px;

`;

const ItemSpanName = styled.span`

    color: #b5224e;
    font-size: 17px;
    font-weight: 600;
`;

const MovieImage = styled.img`
    position: relative;
    height: 500px;
    width: 400px;
    @media only screen and (max-width: 600px){
        left: calc(50% - 150px);
        height: 400px;
        width: 300px;
  }

`;

const MovieItem = ({ mov }) => {
  return (
    <MovieItemContainer>
      <MovieItemLeftSide>
        <MovieImage src={mov.Poster} alt={mov.Poster}/>
      </MovieItemLeftSide>
      <MovieItemRightSide>
        
        <ul>
            <ItemList><h2>{mov.Title}</h2></ItemList>
            <ItemList><ItemSpanName>Released: </ItemSpanName>{mov.Released}</ItemList>
            <ItemList><ItemSpanName>Runtime: </ItemSpanName>{mov.Runtime}</ItemList>
            <ItemList><ItemSpanName>Actors: </ItemSpanName>{mov.Actors}</ItemList>
            <ItemList><ItemSpanName>Country: </ItemSpanName> {mov.Country}</ItemList>
            <ItemList><ItemSpanName>Director: </ItemSpanName>{mov.Director}</ItemList>
            <ItemList><ItemSpanName>Language: </ItemSpanName>{mov.Language}</ItemList>
            <ItemList><ItemSpanName>Plot: </ItemSpanName> {mov.Plot}</ItemList>
            <ItemList><ItemSpanName>Production: </ItemSpanName>{mov.Production}</ItemList>
        </ul>
       
        
        
        
       
        
        
       
        
      </MovieItemRightSide>
    </MovieItemContainer>
  );
};

export default MovieItem;
