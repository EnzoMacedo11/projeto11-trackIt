import Navbar from "./NavBar";
import styled from "styled-components";
import Footer from "./Footer";

export default function Historic() {

  return (
    <Container>
      <Navbar />
      <MHabit>
        <h1>
          Histórico
        </h1>
      </MHabit>
      <Habit>
          <h3>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
          </h3>
      </Habit>
      <Footer />
    </Container>
  );
  }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MHabit = styled.div`
  margin-top: 22px;
  margin-right: 18px;
  margin-left: 17px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 10px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }

  button {
    margin-top: 5px;
    width: 40px;
    height: 35px;

    background: #52b6ff;
    border-radius: 4px;
    color: #ffffff;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const Habit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
`;
