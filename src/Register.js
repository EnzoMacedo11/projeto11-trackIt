import { Link } from "react-router-dom";
import logo from "./img/Group 8.png";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const postUrl =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

  function postRegister(event) {
    event.preventDefault();
    const promisse = axios.post(postUrl, {
      email: email,
      name: name,
      image: image,
      password: password,
    });
    promisse.then((res) => {
      console.log("teste envio", res.data);
      navigate(`/`);
    });
    promisse.catch((erro) => {
      console.log("teste envio erro", erro.response.data);
    });
  }

  return (
    <Container>
      <img src={logo} />
      <form onSubmit={postRegister}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="senha"
        />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="nome"
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder="foto"
        />
        <ButtonLogin type="submit">Cadastrar</ButtonLogin>
      </form>
      <Link to={"/"}>
        <h1>Já tem uma conta? Faça login!</h1>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form{
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
