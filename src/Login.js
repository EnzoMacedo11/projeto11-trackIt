import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./img/Group 8.png";

export default function Login() {
  return (
    <Container>
      <img src={logo} />
      <input placeholder="email" />
      <input placeholder="senha" />
      <Link to={"/home"}>
        <ButtonLogin>Entrar</ButtonLogin>
      </Link>

      <Link to={"/register"}>
        <h1>Não tem uma conta? Cadastre-se!</h1>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 68px;
    width: 180px;
    height: 178px;
  }
  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
  }
  h1 {
    margin-top: 25px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52b6ff;
  }
`;
const ButtonLogin = styled.button`
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 5px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  color: #ffffff;
`;