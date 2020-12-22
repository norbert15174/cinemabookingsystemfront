import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Item from "./item";

const ReservationWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 20%;
  top: 10vh;
  z-index: 100;
`;

const FromContainer = styled.form`
  width: 100%;
  position: relative;
  height: 100px;
  text-align: center;
`;

const FormInput = styled.input`
  width: ${(props) => (props.search === "yes" ? "300px" : "0px")};
  background-color: black;
  color: white;
  position: relative;
  top: 5vh;
  padding: 20px 25px 20px 25px;
  outline: none;
  border: none;
  transition: all 1s;
  border-radius: 50px;
`;

const Search = styled(FaSearch)`
  color: red;
  position: relative;
  top: calc(10vh - 25px);
  left: calc(-60px);
  font-size: 30px;
  background: #0cddeb;
  background: -webkit-radial-gradient(top right, #0cddeb, #702b61);
  background: -moz-radial-gradient(top right, #0cddeb, #702b61);
  background: radial-gradient(to bottom left, #0cddeb, #702b61);
  color: white;
  padding: 20px 20px 20px 20px;
  border-radius: 40px;
  cursor: pointer;
`;

const ReservationItemContainer = styled.div`
  position: relative;
  width: 80%;
  left: 10%;
  padding-top: 20px;
  padding-bottom: 50px;
  top: 10vh;
`;

const HeaderText = styled.h1`
  color: white;
  font-style: italic;
  width: 100%;
  text-align: center;
  position: relative;
  top: 0;
  opacity: 1;
  animation: mymove 1s ease-out;
  @keyframes mymove {
    from {
      opacity: 0;
      top: 100px;
    }
    to {
      top: 0px;
      opacity: 1;
    }
  }
`;

class Reservation extends React.Component {
  state = {
    search: "no",
    mail: "",
    data: "",
    isReady: "",
  };

  handleSearch() {
    if (this.state.search === "yes") this.searchReservation();
    this.setState({
      search: this.state.search === "yes" ? "no" : "yes",
    });
  }

  handleMail(e) {
    console.log(e.target.value);
    this.setState({
      mail: e.target.value,
    });
  }

  async searchReservation() {
    this.setState({
      isReady: "",
    });

    await fetch(
      "http://localhost:8010/filmshow/reservation?email=" + this.state.mail
    )
      .then((response) => response.json())
      .then((data) => this.setState({ data, isReady: "yes" }))
      .catch((er) =>
        this.setState({
          isReady: "no",
        })
      );
  }

  render() {
    return (
      <ReservationWrapper>
        <FromContainer>
          <FormInput
            placeholder="Wprowadz E-mail"
            type="text"
            onChange={(e) => this.handleMail(e)}
            search={this.state.search}
          ></FormInput>
          <Search
            onClick={(e) => this.handleSearch()}
            search={this.state.search}
          ></Search>
        </FromContainer>
        <ReservationItemContainer>
          {this.state.isReady === "yes"
            ? this.state.data.map((data) => <Item info={data}></Item>)
            : null}
          {this.state.isReady === "no" ? (
            <HeaderText>
              Nie znaleziono biletu przypisanego do tego maila
            </HeaderText>
          ) : null}
        </ReservationItemContainer>
      </ReservationWrapper>
    );
  }
}

export default Reservation;
