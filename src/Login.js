import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./img/Group 8.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

export default function Login() {
  let [buttonD, setButtonD] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postUrl =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  function postLogin(event) {
    event.preventDefault();
    const promisse = axios.post(postUrl, {
      email: email,
      password: password,
    });
    promisse.then((res) => {
      disableButton()
      console.log("teste envio", res.data);
      navigate(`/habitos`);
    });
    promisse.catch((erro) => {
      console.log("teste envio erro", erro.response.data);
      alert(erro.response.data.message)
    });
  }

  function disableButton() {
    setButtonD(true);
    console.log(buttonD);
  }

  return (
    <Container>
      <img src={logo} />
      <form onSubmit={postLogin}>
        <input type ="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        />
        <input type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="senha"
        />
        <ButtonLogin disabled={buttonD} type="submit">  {buttonD === true ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          ) : (
            <p>Entrar</p>
          )}</ButtonLogin>
      </form>
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

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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
