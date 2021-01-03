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
  background-color: ${(props) => (props.show === "" ? "none" : "#090909")};

  @media only screen and (max-width: 900px) {
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
  z-index: 500;
  background-color: black;
  box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.75);
  transition: all 1s;
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 100px 100px 100px;
  padding-top: 100px;
  @media only screen and (max-width: 1000px) {
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
  right: 50px;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    font-size: 30px;
    right: 30px;
  }
`;

const LeftIcon = styled(AiFillRightSquare)`
  right: 50px;
  color: white;
  position: relative;
  font-size: 50px;
  cursor: pointer;
  transform: ${(props) =>
    props.show === "yes" ? "rotate(180deg)" : "rotate(0deg)"};
  transition: all 1s;
  @media only screen and (max-width: 900px) {
    font-size: 30px;
    right: 30px;
  }
`;

const FuncName = styled.p`
  margin-left: 30px;
  width: 100%;
  font-size: 35px;
  color: white;
  vertical-align: middle;
  cursor: pointer;
`;

const RoomIcon = styled(BiCameraMovie)`
  right: 50px;
  color: white;
  position: relative;
  font-size: 50px;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    font-size: 30px;
    right: 30px;
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
  @media only screen and (max-width: 900px) {
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
  @media only screen and (max-width: 600px) {
    width: 50px;
    font-size: 12px;
    padding: 10px 20px 10px 20px;
  }
`;
const AddButton = styled.div`
  width: 200px;
  background-color: #b5224e;
  padding: 10px 20px 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-weight: 700;
  position: relative;
  right: 0;
  cursor: pointer;
  margin-top: 30px;
  left: 50%;
  @media only screen and (max-width: 800px) {
    left: calc(50% - 100px);
    font-size: 14px;
    padding: 10px 20px 10px 20px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 65% 35%;
  }
`;

const InitialHeader = styled.h1`
  color: white;
  width: 100%;
  text-align: center;
  font-style: italic;
  font-size: 40px;
`;

function Movie() {
  const [pressed, setPressed] = useState("no");
  const [moviename, setMovieName] = useState("");
  const [movie, setMovie] = useState("");
  const [show, setShow] = useState("");

  const myHeaders = new Headers({
    Authorization: "Bearer " + localStorage.getItem("Bearer"),
  });

  async function findFilm() {
    if (moviename === "") {
    } else {
      await fetch("/movies/find/" + moviename, {
        headers: myHeaders,
      })
        .then((response) => response.json())
        .then((data) => setMovie(data))
        .catch((error) => alert("taki film nie istnieje"));
    }
  }
  async function addMovie() {
    if (moviename === "") {
    } else {
      await fetch("/movies/add/" + movie.Title, { headers: myHeaders })
        .then((response) => response.json())
        .then((data) => {
          alert("Film został dodany");
          window.location.reload();
        })
        .catch((error) =>
          alert(
            "Nie udało się dodać filmu, prawdopodobnie ten film jest już dodany do bazy danych"
          )
        );
    }
  }

  return (
    <MovieContainer show={show}>
      <MovieMenu show={pressed}>
        <FuncName></FuncName>
        <FuncName>
          <LeftIcon
            onClick={(e) => setPressed(pressed === "no" ? "yes" : "no")}
            show={pressed}
          />
        </FuncName>
        <FuncName onClick={(e) => setShow("movie")}>New Movie</FuncName>
        <FuncName>
          <MovieIcon onClick={(e) => setShow("movie")} />
        </FuncName>
        <FuncName>New Room</FuncName>
        <FuncName>
          <RoomIcon />
        </FuncName>
      </MovieMenu>
      {show === "" ? (
        <InitialHeader>Select what you want to do!</InitialHeader>
      ) : null}
      {show === "movie" ? (
        <NewMovie>
          <InputContainer>
            <MovieInput
              onChange={(e) => setMovieName(e.target.value)}
            ></MovieInput>
            <SearchButton onClick={(e) => findFilm()}>Wyszukaj</SearchButton>
          </InputContainer>
          {movie === "" ? null : (
            <>
              <MovieItem mov={movie} />
              <AddButton onClick={(e) => addMovie()}>Dodaj Film</AddButton>
            </>
          )}
        </NewMovie>
      ) : null}
    </MovieContainer>
  );
}

export default Movie;
