import React from "react";
import styled from "styled-components";

const Container = styled.div`

    width: 90vw;
    position: relative;
    top: 10vh;
    left: 5vw;
    height: 85vh;
    background-color: #0D0D0D;

`;

const FormContainer = styled.div`
    position: relative;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;

`;
const DateInput = styled.input`

    width: 250px;
    height: 30px;
    color: #69c8ff;
    background-color: #7C7B7B;
    border: 4px solid #69c8ff;
    border-radius: 5px;
    font-size: 18px;
    padding: 5px 5px 5px 5px;

`;
const DateLabel = styled.label`

    color: white;
    font-size: 20px;
    margin-right: 10px;

`;

class FilmShow extends React.Component{
    render(){
        return(
            <Container>
                <FormContainer>
                    <DateLabel for="meeting-time">Data seansu: </DateLabel>
                    <DateInput type="datetime-local" id="meeting-time" name="meeting-time"/>
                </FormContainer>
            </Container>
        )
    }
}

export default FilmShow;