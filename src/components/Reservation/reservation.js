import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";


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

    width: ${props => props.search === 'yes' ? "300px" : "0px"};
    background-color: black;
    color: white;
    position: relative;
    top: 5vh;
    padding: 20px 30px 20px 30px;
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
    font-size: 25px;
    background: #0CDDEB;
background: -webkit-radial-gradient(top right, #0CDDEB, #702B61);
background: -moz-radial-gradient(top right, #0CDDEB, #702B61);
background: radial-gradient(to bottom left, #0CDDEB, #702B61);
color: white;
    padding: 20px 20px 20px 20px;
    border-radius: 40px;
    cursor: pointer;
    
`;

class Reservation extends React.Component{

    state = {
        search: 'no',
        mail: '',
        data: '',
        isReady: ''
    }

    handleSearch(){
        if(this.state.search === 'yes') this.searchReservation();
        this.setState({
            search: this.state.search === 'yes' ? 'no' : 'yes'
        })
        
    }

    handleMail(e){
        console.log(e.target.value);
        this.setState({
            mail: e.target.value
        })
    }

    async searchReservation(){
        await fetch("http://localhost:8010/filmshow/reservation?email=" + this.state.mail)
        .then((response) => response.json())
        .then((data) => this.setState({ data, isReady: "yes" })).catch((asd) => console.log());

        console.log(this.state.data);
    }

    render(){
        return(
            <ReservationWrapper>
                <FromContainer>
                    <FormInput placeholder="Wprowadz E-mail" type="text" onChange={e => this.handleMail(e)} search={this.state.search}></FormInput>
                    <Search  onClick={e => this.handleSearch()} search={this.state.search}></Search>
                </FromContainer>
            </ReservationWrapper>
        )
    }
}

export default Reservation;