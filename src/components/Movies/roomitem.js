import React from "react";
import styled from "styled-components";

const RoomContainer = styled.div`
  width: 100%;
  padding: 0 20px 0 20px;
  color: white;
`;

const RoomHeader = styled.h1`
  font-size: 30px;
  font-style: italic;
  &::after {
    content: "";
    display: block;
    width: 300px;
    border-bottom: 3px solid #b5224e;
    padding-top: 5px;
  }
`;

const CinemaRoom = styled.div`
  width: 90%;
  border-bottom: 1px solid #b5224e;
  display: grid;
  grid-template-columns: 250px 250px;
  padding-bottom: 10px;
  margin-top: 30px;
  animation: show 1s ease-in-out;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CinemaRoomInfo = styled.div`
  width: 200px;
  background-color: #b5224e;
  padding: 20px 20px 20px 20px;
  color: white;
  font-size: 20px;
  border-radius: 5px;
`;

const RoomInput = styled.input`
  width: 200px;
  padding: 10px 10px 10px 10px;
  color: #b5224e;
`;

const RoomAddButton = styled.button`
  width: 140px;
  background-color: #b5224e;
  color: white;
  padding: 12px 10px 12px 10px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 50px;
  font-size: 14px;
`;

class RoomItem extends React.Component {
  state = {
    rooms: "",
    isReady: "no",
    seats: "",
  };

  setSeats = (e) => {
    if (e.target.value > 100) e.target.value = 100;
    if (e.target.value < 0) e.target.value = "";
    this.setState({
      seats: e.target.value,
    });
  };

  async componentDidMount() {
    await fetch("/room", { headers: this.myHeaders })
      .then((response) => response.json())
      .then((rooms) => this.setState({ rooms, isReady: "yes" }));
  }

  async addNewRoom() {
    if (this.state.seats < 20) {
      alert("ilość miejsc musi byc większa od 20");
    } else {
      await fetch("/room/addroom?roomSeat=" + this.state.seats)
        .then((response) => alert("Sala została dodana"))
        .catch((e) => console.log("the room has not been added"));

      this.setState({ isReady: "no" });

      await fetch("/room", { headers: this.myHeaders })
        .then((response) => response.json())
        .then((rooms) => this.setState({ rooms, isReady: "yes" }));
    }
  }

  render() {
    return (
      <RoomContainer>
        <RoomHeader>Nowa Sala</RoomHeader>
        <RoomInput
          type="number"
          value={this.state.seats}
          onChange={(e) => this.setSeats(e)}
          placeholder="Ilość miejsc"
          required
        ></RoomInput>
        <RoomAddButton onClick={(e) => this.addNewRoom()}>
          Dodaj Sale
        </RoomAddButton>
        <RoomHeader>Dostępne Sale</RoomHeader>
        {this.state.isReady === "yes"
          ? this.state.rooms.map((s) => (
              <CinemaRoom>
                <CinemaRoomInfo>Numer sali: {s.id}</CinemaRoomInfo>
                <CinemaRoomInfo>Ilość miejsc: {s.numberOfSeats}</CinemaRoomInfo>
              </CinemaRoom>
            ))
          : null}
      </RoomContainer>
    );
  }
}

export default RoomItem;
