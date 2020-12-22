import React from "react";
import styled from "styled-components";
import Item from "./item";
import { FaSearch } from "react-icons/fa";

const ScheduleCointener = styled.div`
  position: relative;
  top: 100px;
  width: 100%;
  background-color: #292829;
`;

const Search = styled(FaSearch)`
  color: red;
  position: relative;
  top: calc(10vh - 25px);
  left: 50%;
  font-size: 30px;
  background: #0cddeb;
  color: white;
  padding: 20px 20px 20px 20px;
  border-radius: 40px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  width: 80%;
  position: relative;
  left: 10%;
  margin-bottom: 40px;
  @media (max-width: 1200px){
    left: calc(10% -  30px);
  }
`;

const FromContainer = styled.div`
  left: 0px;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  height: ${(props) => (props.search === "yes" ? "600px" : "0px")};
  padding: ${(props) =>
    props.search === "yes" ? "30px 0px 30px 0px" : "0px 0px 0px 0px"};
  position: relative;
  background-color: #1c1b1c;
  border-radius: 20px;
  margin-top: 140px;
  display: grid;
  grid-template-columns: 100%;
  transition: all 2s;
  @media (max-width: 1400px){
    padding-left: 30px;
    padding-right: 30px;
  }
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
  left: 20%;
  position: relative;
  @media (max-width: 1400px){
    left: 10%;
    width: 250px;
  }
`;

const TextInput = styled.input`
  height: 30px;
  color: #69c8ff;
  background-color: #2e2e2e;
  border: 4px solid #69c8ff;
  border-radius: 5px;
  font-size: 18px;
  padding: 5px 5px 5px 5px;
  margin-top: 20px;
  left: 20%;
  position: relative;
  width: 250px;
  @media (max-width: 1400px){
    left: 10%;
    width: 250px;
  }
`;

const DateLabel = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 500;
  margin-right: 10px;
  width: 200px;
  margin-bottom: 20px;
  left: 10%;
  position: relative;
  margin-top: 30px;
  &::after {
    content: "";
    display: block;
    width: 400px;
    margin-top: 2px;
    border-bottom: 2px solid #69c8ff;
  }
  @media (max-width: 1200px){
    left: 0;
    &::after {
    content: "";
    display: block;
    width: 80%;
    margin-top: 2px;
    border-bottom: 2px solid #69c8ff;
  }
  }
`;

const InputsWrapper = styled.div`
  opacity: ${(props) => (props.search === "yes" ? "1" : "0")};
  transition: ${(props) => (props.search === "yes" ? "1s all" : "0.2s all")};
  transition-delay: ${(props) => (props.search === "yes" ? "1s" : "0")};
`;

class Schedule extends React.Component {
  state = {
    data: [],
    isReady: "no",
    search: "",
    from: "",
    to: "",
    movie: "",
  };

  async componentDidMount() {
    await fetch("http://192.168.0.152:8010/filmshow")
      .then((response) => response.json())
      .then((data) => this.setState({ data, isReady: "yes" }));
  }

  handleSearch(e) {
    this.setState({
      search: this.state.search === "yes" ? "no" : "yes",
    });
  }

  async handleSearchFilmShow(e) {
    this.setState({
      isReady: "no",
      [e.target.name] : e.target.value
    })
    setTimeout( e => fetch("http://192.168.0.152:8010/filmshow/findfilmshow?from=" + this.state.from + "&to=" + this.state.to + "&title=" + this.state.movie )
    .then((response) => response.json())
    .then((data) => data.status === 200 ? this.setState({ data, isReady: "yes" }) : null).catch(er => null),100);
    
  }

  render() {
    return (
      <ScheduleCointener>
        <SearchContainer>
          <Search onClick={(e) => this.handleSearch()}></Search>
          <FromContainer search={this.state.search}>
            <InputsWrapper search={this.state.search}>
              <DateLabel>Od Data</DateLabel>
              <DateInput
                onChange={(e) => this.handleSearchFilmShow(e)}
                type="date"
                id="meeting-time"
                name="from"
              ></DateInput>
              <DateLabel>Do Data</DateLabel>
              <DateInput
                onChange={(e) => this.handleSearchFilmShow(e)}
                type="date"
                id="meeting-time"
                name="to"
              ></DateInput>
              <DateLabel>Film</DateLabel>
              <TextInput
                type="text"
                name="movie"
                onChange={(e) => this.handleSearchFilmShow(e)}
              ></TextInput>
            </InputsWrapper>
          </FromContainer>
        </SearchContainer>

        {this.state.isReady === "yes"
          ? this.state.data.map((schedules) => <Item schedule={schedules} />)
          : null }
      </ScheduleCointener>
    );
  }
}

export default Schedule;
