import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90vw;
  position: relative;
  top: 10vh;
  left: 5vw;
  background-color: #0d0d0d;
  min-height: 75vh;
  padding-bottom: 50px;
  padding-top: 30px;
  -webkit-box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.75);
`;

const FormContainer = styled.div`
  position: relative;
  width: 90%;
  left: 5%;
  top: 5%;
`;
const DateInput = styled.input`
  width: 250px;
  height: 30px;
  color: #69c8ff;
  background-color: #2e2e2e;
  border: 4px solid #69c8ff;
  border-radius: 5px;
  font-size: 18px;
  padding: 5px 5px 5px 5px;
  margin-top: 20px;
`;
const DateLabel = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 500;
  margin-right: 10px;
  width: 200px;
  margin-bottom: 20px;
  &::after {
    content: "";
    display: block;
    width: 400px;
    margin-top: 2px;
    border-bottom: 2px solid #69c8ff;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  position: relative;
`;

const SelectInput = styled.select`
  width: 250px;
  height: 40px;
  color: #69c8ff;
  background-color: #2e2e2e;
  border: 4px solid #69c8ff;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 5px 5px 5px;
  outline: none;
`;
const HeaderMovie = styled.h3`
  color: white;
  position: relative;
  z-index: 400;
`;

const MovieContainer = styled.div`
  width: 95%;
  position: relative;
  &:nth-child(1) {
    border-right: 2px solid #69c8ff;
    padding-right: 50px;
  }
`;
const GridContainer = styled.div`
  display: grid;
  width: 100%;
  position: relative;
  grid-template-columns: 50% 50%;
  margin-top: 30px;
`;

const MovieImage = styled.img`
  width: 300px;
  position: relative;
  top: 10%;
  left: 15%;
  height: 400px;
`;

const HeaderSpan = styled.span`
  color: #69c8ff;
`;

const AddButton = styled.button`
  width: 200px;
  background-color: #2e2e2e;
  font-size: 16px;
  font-weight: 600;
  height: 50px;
  position: relative;
  outline: none;
  border-radius: 5px;
  left: calc(50% - 200px);
  margin-top: 100px;
  color: #69c8ff;
  border: 5px solid #69c8ff;
  cursor: pointer;
  transition: 1s all;
  &:hover {
    background-color: #69c8ff;
    color: #2e2e2e;
  }
`;
const createHistory = require("history").createBrowserHistory;

class FilmShow extends React.Component {
  state = {
    movies: "",
    rooms: "",
    isReady: "no",
    isRoomReady: "no",
    title: "",
    titleReady: "no",
    room: "",
    movie: "",
    date: "",
  };

  myHeaders = new Headers({
    Authorization: "Bearer " + localStorage.getItem("Bearer"),
    "Content-Type": "application/json"
  });

  async componentDidMount() {
    await fetch("/movies" , {headers: this.myHeaders})
      .then((response) => response.json())
      .then((movies) => this.setState({ movies, isReady: "yes" }));
    await fetch("/room",{headers: this.myHeaders})
      .then((response) => response.json())
      .then((rooms) => this.setState({ rooms, isRoomReady: "yes" }));
  }

  handleMovie = (e) => {
    this.setState({
      movie: e.target.value,
      title: e.target.value,
      titleReady: "yes",
    });
  };

  handleRoom(e) {
    this.setState({
      room: e.target.value,
    });
  }

  handleDate(e) {
    console.log(e.target.value);
    this.setState({
      date: e.target.value,
    });
  }

  async handleFilmShow(e) {
    await fetch(
      "http://localhost:8010/filmshow/addfilmshow?title=" +
        this.state.movie +
        "&roomId=" +
        this.state.room,
      {
        method: "post",
        headers: this.myHeaders,
        body: JSON.stringify({
          dateStart: this.state.date,
        }),
      }
    ).then(response => response.status === 200 ? alert("Seans został dodany") : alert("Ta sala jest juz zarezerwowana"));
  }
  render() {
    if (localStorage.getItem("Bearer") === null) {
      createHistory().push("/login");
      let pathUrl = window.location.href;
      window.location.href = pathUrl;
    } else {
      return (
        <Container>
          <FormContainer>
            <Wrapper>
              <DateLabel>Data seansu: </DateLabel>
              <DateInput
                onChange={(e) => this.handleDate(e)}
                type="datetime-local"
                id="meeting-time"
                name="meeting-time"
              />
            </Wrapper>
            <Wrapper>
              <DateLabel>Film: </DateLabel>
              <SelectInput onChange={(e) => this.handleMovie(e)}>
                {this.state.movies
                  ? this.state.movies.map((m) => (
                      <option value={m.Title}>{m.Title}</option>
                    ))
                  : null}
              </SelectInput>
              {this.state.titleReady === "yes"
                ? this.state.movies.map((movie) =>
                    movie.Title === this.state.title ? (
                      <GridContainer>
                        <MovieContainer>
                          <HeaderMovie>
                            <HeaderSpan>
                              Tytuł:
                              <br />
                            </HeaderSpan>{" "}
                            {movie.Title}
                          </HeaderMovie>
                          <HeaderMovie>
                            <HeaderSpan>
                              Opis:
                              <br />
                            </HeaderSpan>{" "}
                            {movie.Plot}
                          </HeaderMovie>
                          <HeaderMovie>
                            <HeaderSpan>
                              Reżyser:
                              <br />
                            </HeaderSpan>{" "}
                            {movie.Director}
                          </HeaderMovie>
                          <HeaderMovie>
                            <HeaderSpan>
                              Aktorzy:
                              <br />
                            </HeaderSpan>{" "}
                            {movie.Actors}
                          </HeaderMovie>
                          <HeaderMovie>
                            <HeaderSpan>
                              Czas:
                              <br />
                            </HeaderSpan>{" "}
                            {movie.Runtime}
                          </HeaderMovie>
                        </MovieContainer>
                        <MovieContainer>
                          <MovieImage src={movie.Poster} alt={movie.Title} />
                        </MovieContainer>
                      </GridContainer>
                    ) : null
                  )
                : null}
            </Wrapper>

            <Wrapper>
              <DateLabel>Sala: </DateLabel>
              <SelectInput onChange={(e) => this.handleRoom(e)}>
                <option>-</option>
                {this.state.rooms
                  ? this.state.rooms.map((m) => (
                      <option value={m.id}>{m.id}</option>
                    ))
                  : null}
              </SelectInput>
            </Wrapper>
            <AddButton onClick={(e) => this.handleFilmShow(e)}>
              Dodaj Seans
            </AddButton>
          </FormContainer>
        </Container>
      );
    }
  }
}

export default FilmShow;
