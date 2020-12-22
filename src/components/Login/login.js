import React from "react";
import styled from "styled-components";
import {BiLogIn} from "react-icons/bi";

const LoginContainet = styled.div`
  width: 100vw;
  height: 95vh;
  position: relative;
  top: 5vh;
  background: url("https://img.global.news.samsung.com/pl/wp-content/uploads/2020/02/Samsung-Onyx-in-Australia2.jpg")
    no-repeat;
  background-size: 100% 100%;
`;

const LoginForm = styled.form`
  width: 80vw;
  height: 80vh;
  position: relative;
  top: 10vh;
  left: 10vw;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 2px 1px 12px 7px #000000;
  box-shadow: 2px 1px 12px 7px #000000;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100px 100px;
`;

const LoginInput = styled.input`
  width: 30%;
  height: 20px;
  padding: 20px 20px 20px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;
  left: calc(35% - 20px);
  top: 30vh;
  outline: none;
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 15px;
  &::placeholder{
      color: white;
      font-style: italic;
  }
`;

const LoginIcon = styled(BiLogIn)`

    position: absolute;
    font-size: 100px;
    color: white;
    left: calc(50% - 150px);
    top: 15vh;

`;

const LoginSpan = styled.span`

  font-size: 50px;
  color: white;
  position: absolute;
  left: calc(50% - 30px);
  top: calc(15vh + 10px);
  font-weight: 700;
  font-style: italic;

`;

const SubmitButton = styled.span`

  font-size: 20px;
  color: white;
  position: absolute;
  left: calc(35% - 20px);
  bottom: 25vh;
  font-weight: 700;
  font-style: italic;
  background-color: #b5224e;
  border-radius: 30px;
  cursor: pointer;
  text-align: center;
  width: 30%;
  padding: 20px 20px 20px 20px;

`;

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleLogin = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }


  render() {
    return (
      <LoginContainet>
        <LoginForm>
            <LoginSpan>Login</LoginSpan>
            <LoginIcon></LoginIcon>
          <LoginInput type="text" name="username" placeholder="username" onChange={e => this.handleLogin(e)}></LoginInput>
          <LoginInput type="text" name="password" placeholder="password" onChange={e => this.handleLogin(e)}></LoginInput>
          <SubmitButton>Sign in</SubmitButton>
        </LoginForm>
      </LoginContainet>
    );
  }
}

export default Login;
