import Navbar from "./NavBar";
import styled from "styled-components";
import Footer from "./Footer";
import { useState } from "react";
import dayjs from "dayjs";
import vzin from "./img/Vector.png";

export default function Today() {
//   console.log(dayjs());
//   console.log(dayjs().year());
//   console.log(dayjs().month());
//   console.log(dayjs().date());
//   console.log(dayjs().format("dddd"));
  let data = dayjs().date();
  let mês = dayjs().month();
  let dia = dayjs().format("dddd");
  let [nHabit, setNHabit] = useState(1);
  let [buttonC, setButtonC] = useState(false);

  function Color() {
    if (buttonC == true) {
      setButtonC(false);
    }
    if (buttonC == false) {
      setButtonC(true);
    }
  }

  return (
    <Container>
      <Navbar />
      <MHabit>
        <h1>
          {dia}, {data}/{mês + 1}
        </h1>
        <h2>Nenhum hábito concluído ainda</h2>
      </MHabit>
      <Habit>
        {nHabit === 0 ? (
          <h3>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </h3>
        ) : (
          <Card>
            <Info>
              <h1>Ler 1 capítulo de livro</h1>
              <h2>Sequência atual: 3 dias</h2>
              <h2>Seu recorde: 5 dias</h2>
            </Info>
            <Check>
            <CheckButton buttonC={buttonC}
                  onClick={Color}>
              <img src={vzin} />
            </CheckButton>
            </Check>
          </Card>
        )}
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

const Info = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top:13px;
    margin-bottom:5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    color: #666666;
  }
`;
const Card = styled.div`
    margin-top: 30px;
  width: 340px;
  height: 94px;
  background: #E5E5E5;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  

`;
const Check = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const CheckButton = styled.button`
  box-sizing: border-box;
    width: 69px;
    height: 69px;
    background: ${({ buttonC }) => (buttonC ? "green" : "#ebebeb")};
    border-radius: 5px;
  
`