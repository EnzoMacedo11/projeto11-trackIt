import Navbar from "./NavBar";
import styled from "styled-components";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";

export default function Habit() {
  const [name, setName] = useState("agua");
  const [days, setDays] = useState([]);
  const [visible, setvisible] = useState(false);
  let [nHabit, setNHabit] = useState(0);
  const week = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  let [buttonsC, setButtonsC] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const postUrl =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  function postHabit(event) {
    event.preventDefault();
    const promisse = axios.post(postUrl, {
      name: name,
      days: returnDays[buttonsC],
    });
    promisse.then((res) => {
      console.log("teste envio", res.data);
    });
    promisse.catch((erro) => {
      console.log("teste envio erro", erro.response.data);
      alert(erro.response.data.message);
    });
  }

  function hide() {
    if (visible == true) {
      setvisible(false);
    }
    if (visible == false) {
      setvisible(true);
    }
  }

  function colorChanger(index) {
    console.log("teste",buttonsC)
    
    let listabotão = [...buttonsC];
    
    console.log("index", index);

    if (listabotão[index] == true) {
      listabotão[index] = false;
    } else {
      listabotão[index] = true;
    }
    console.log("listab",listabotão)
    setButtonsC([...listabotão])
  }

  function returnDays(array){
    let trueDays = [].filter

  }

  return (
    <Container>
      <Navbar />
      <MHabit>
        <h1>Meus hábitos</h1>
        <button onClick={hide}>+</button>
      </MHabit>
      <AlignHabit>
        <FHabit visible={visible}>
          <form onSubmit={postHabit}>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <Days>
              {week.map((d) => {
                return (
                  <DayButton type="button"
                    buttonC={buttonsC[week.indexOf(d)]}
                    onClick={() => colorChanger(week.indexOf(d))}
                  >
                    {d[0]}
                  </DayButton>
                );
              })}
            </Days>

            <Save>
              <h1 onClick={hide} >Cancelar</h1>
              <button type="submit">Salvar</button>
            </Save>
          </form>
        </FHabit>
      </AlignHabit>

      <Habits>
        {nHabit === 0 ? (
          <h1>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </h1>
        ) : (
          <Card>
            <h1>{name}</h1>
            <CardAlign>
              {" "}
              {week.map((d) => {
                return (
                  <DayButton
                    buttonC={[week.indexOf(d)]}
                   
                  >
                    {d}
                  </DayButton>
                );
              })}
            </CardAlign>
          </Card>
        )}
      </Habits>
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
  justify-content: space-between;

  h1 {
    margin-top: 10px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
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
const Habits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
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
const FHabit = styled.div`
  margin-top: 30px;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: center;

  width: 340px;
  height: 180px;
  left: 17px;
  top: 147px;

  background: #e5e5e5;
  border-radius: 5px;
  form {
    margin-top: 18px;
    input {
      box-sizing: border-box;
      width: 303px;
      height: 45px;

      background: #ffffff;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
    }
  }
`;

const AlignHabit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Days = styled.div`
  margin-top: 5px;
  display: flex;
`;
const DayButton = styled.button`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background: ${({ buttonC }) => (buttonC ? "#DBDBDB" : "#FFFFF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;

  color: ${({ buttonC }) => (buttonC ? "#FFFFFF" : "#DBDBDB")};
`;

const Save = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 140px;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #52b6ff;
  }
  button {
    margin-left: 23px;
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;

const Card = styled.div`
  width: 340px;
  height: 91px;
  background: #e5e5e5;
  border-radius: 5px;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
`;

const CardAlign = styled.div`
  display: flex;
`;
