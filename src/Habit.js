import Navbar from "./NavBar";
import styled from "styled-components";
import Footer from "./Footer";
import { useState } from "react";

export default function Habit() {
  const [visible, setvisible] = useState(false);
  let [nHabit, setNHabit] = useState(true);
  const days = ["D","S","T","Q","Q","S","S"]
  let [buttonC,setButtonC]=useState(false);

  function Hide (){
  if(visible == true){
    setvisible(false)
  }
  if(visible == false){
    setvisible(true)
  }

   } 
  
  return (
    <Container>
      <Navbar />
      <MHabit>
        <h1>Meus hábitos</h1>
        <button onClick={Hide}>+</button>
      </MHabit>
      <AlignHabit>
        <FHabit visible={visible}>
          <form>
            <input></input>
            <Days>
            {days.map((d) => {
              return(
                <DayButton buttonC={buttonC}
                  onClick={e => 
                  setButtonC(state => !state)
                    }
                >{d}</DayButton>
              )
            })}
            </Days>

            <Save><h1>Cancelar</h1>
            <button>Salvar</button></Save>
            
          </form>
          </FHabit>
      </AlignHabit>

      <Habits>
        {nHabit === true ? (
          <h1>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </h1>
        ) : (
          <h1>agua</h1>
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
  display: ${({visible}) => visible ? 'flex': 'none'};
  justify-content: center;
  
  width: 340px;
  height: 180px;
  left: 17px;
  top: 147px;

  background: #E5E5E5;
  border-radius: 5px;
  form{
    margin-top:18px;
    input{
  box-sizing: border-box;
width: 303px;
height: 45px;


background: #FFFFFF;
border: 1px solid #D5D5D5;
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
display:flex;

`
const DayButton = styled.button`
margin-right:5px;
display:flex;
justify-content:center;
align-items:center;
box-sizing: border-box;
width: 30px;
height: 30px;
background: ${({buttonC}) => buttonC ? '#DBDBDB': '#FFFFF'};
border: 1px solid #D5D5D5;
border-radius: 5px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

color: ${({buttonC}) => buttonC ? '#FFFFFF': '#DBDBDB'};`

const Save = styled.div`
display:flex;
align-items:center;
margin-top:40px;
margin-left:140px;

h1{
  font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #52B6FF;
}
button{
margin-left:23px;
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
}
`