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
  background-color: #2E2E2E;
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
  background-color: #2E2E2E;
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
  &:nth-child(1){
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
  background-color: #2E2E2E;
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
  &:hover{
    background-color: #69c8ff;
    color: #2E2E2E;
  }

`;

class FilmShow extends React.Component {

    state ={
        movies: '',
        rooms: '',
        isReady: 'no',
        isRoomReady: 'no',
        title: '',
        titleReady: 'no'
    }


    async componentDidMount() {
        await fetch("http://192.168.0.152:8010/movies")
          .then((response) => response.json())
          .then((movies) => this.setState({ movies, isReady: "yes" }));
          await fetch("http://192.168.0.152:8010/room")
          .then((response) => response.json())
          .then((rooms) => this.setState({ rooms, isRoomReady: "yes" }));
        }

      handleMovie = (e) =>{
        this.setState({
            title: e.target.value,
            titleReady: 'yes'
        })
      }

  render() {
    return (
      <Container>
        <FormContainer>
          <Wrapper>
            <DateLabel>Data seansu: </DateLabel>
            <DateInput
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
            />
          </Wrapper>
          <Wrapper>
            <DateLabel>Film: </DateLabel>
            <SelectInput onChange={e => this.handleMovie(e)}>
                {this.state.movies ? this.state.movies.map(m => <option value={m.Title}>{m.Title}</option>):null}

            </SelectInput>
            {this.state.titleReady === 'yes' ? this.state.movies.map(movie => movie.Title === this.state.title ?<GridContainer><MovieContainer>
                

                
                <HeaderMovie><HeaderSpan>Tytuł:<br/></HeaderSpan> {movie.Title}</HeaderMovie>
                <HeaderMovie><HeaderSpan>Opis:<br/></HeaderSpan> {movie.Plot}</HeaderMovie>
                <HeaderMovie><HeaderSpan>Reżyser:<br/></HeaderSpan> {movie.Director}</HeaderMovie>
                <HeaderMovie><HeaderSpan>Aktorzy:<br/></HeaderSpan> {movie.Actors}</HeaderMovie>
                <HeaderMovie><HeaderSpan>Czas:<br/></HeaderSpan> {movie.Runtime}</HeaderMovie>
            </MovieContainer>
            <MovieContainer>
                <MovieImage src={movie.Poster} alt={movie.Title}/>
            </MovieContainer>
            
            
            </GridContainer> : null): null}
          </Wrapper>

          <Wrapper>
            <DateLabel>Sala: </DateLabel>
            <SelectInput>
            {this.state.rooms ? this.state.rooms.map(m => <option value={m.id}>{m.id}</option>):null}
            </SelectInput>
          </Wrapper>
          <AddButton>Dodaj Seans</AddButton>
        </FormContainer>
      </Container>
    );
  }
}

export default FilmShow;
