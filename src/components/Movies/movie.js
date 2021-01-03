import React, { useState } from "react";
import styled from "styled-components";
import { MdMovie } from "react-icons/md";
import { AiFillRightSquare } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import MovieItem from "./moveitem";

const MovieContainer = styled.div`
  width: 80%;
  position: relative;
  left: 10%;
  top: 150px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #090909;
  @media only screen and (max-width: 900px){
        width: 75%;
        left: 20%;
  }
`;

const MovieMenu = styled.div`
  position: fixed;
  width: 30vw;
  left: ${(props) => (props.show === "yes" ? "0vw" : "calc(-30vw + 100px)")};
  top: 0;
  height: calc(100vh - 50px);
  z-index: 2000;
  background-color: black;
  box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.75);
  transition: all 1s;
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 100px 100px 100px;
  padding-top: 50px;
  @media only screen and (max-width: 1000px){
      width: 100vw;
      left: ${(props) => (props.show === "yes" ? "0vw" : "calc(-100vw + 50px)")};
  }
  /* &::after{
        content: '';
        display: block;
        position: fixed;
        left: 0;
        width: 50px;
        height: 50px;
        background-color: red;
    } */
`;

const MovieIcon = styled(MdMovie)`
  color: white;
  position: relative;
  font-size: 50px;
  right: 30px;
  cursor: pointer;
  @media only screen and (max-width: 900px){
      font-size: 30px;
      right: 10px;
  }
`;

const LeftIcon = styled(AiFillRightSquare)`
  color: white;
  position: relative;
  font-size: 50px;
  right: 30px;
  cursor: pointer;
  transform: ${(props) =>
    props.show === "yes" ? "rotate(180deg)" : "rotate(0deg)"};
  transition: all 1s;
  @media only screen and (max-width: 900px){
      font-size: 30px;
      right: 10px;
  }
`;

const FuncName = styled.p`
  width: 100%;
  text-align: center;
  font-size: 35px;
  color: white;
  vertical-align: middle;
`;

const RoomIcon = styled(BiCameraMovie)`
  color: white;
  position: relative;
  font-size: 50px;
  right: 30px;
  cursor: pointer;
  @media only screen and (max-width: 900px){
      font-size: 30px;
      right: 10px;
  }
`;

const NewMovie = styled.div`
  width: 90%;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 30px;
  padding-top: 30px;
  margin-top: 30px;
  margin-left: 3%;
`;

const MovieInput = styled.input`
  border-radius: 5px;
  width: 300px;
  padding: 10px 10px 10px 10px;
  font-size: 18px;
  background-color: white;
  position: relative;
  left: calc(100% - 330px);
  @media only screen and (max-width: 900px){
        width: 150px;
        font-size: 12px;
        left: calc(100% - 180px);
  }
`;

const SearchButton = styled.div`
  width: 100px;
  background-color: #b5224e;
  padding: 10px 20px 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-weight: 700;
  position: relative;
  right: 0;
  cursor: pointer;
  @media only screen and (max-width: 600px){
        width: 50px;
        font-size: 12px;
        padding: 10px 20px 10px 20px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;
  @media only screen and (max-width: 600px){
    grid-template-columns: 65% 35%;
  }
`;

function Movie() {
  const [pressed, setPressed] = useState("no");
  const [moviename, setMovieName] = useState('');
  const [movie, setMovie] = useState('');

  async function findFilm(){
      if(moviename === ''){}else{
        await fetch("http://192.168.0.152:8010/movies/find/" + moviename)
        .then((response) => response.json())
        .then((data) => setMovie(data))
        .catch((error) => alert('taki film nie istnieje'));
        console.log(movie);
      }

  }

  return (
    <MovieContainer>
      <MovieMenu show={pressed}>
        <FuncName></FuncName>
        <FuncName>
          <LeftIcon
            onClick={(e) => setPressed(pressed === "no" ? "yes" : "no")}
            show={pressed}
          />
        </FuncName>
        <FuncName>New Movie</FuncName>
        <FuncName>
          <MovieIcon />
        </FuncName>
        <FuncName>New Room</FuncName>
        <FuncName>
          <RoomIcon />
        </FuncName>
      </MovieMenu>
      <NewMovie>
        <InputContainer>
          <MovieInput onChange={e => setMovieName(e.target.value)}></MovieInput>
          <SearchButton onClick={e => findFilm()}>Wyszukaj</SearchButton>
        </InputContainer>
        {movie === '' ? null : <MovieItem mov={movie}/> }
      </NewMovie>
    </MovieContainer>
  );
}

export default Movie;
