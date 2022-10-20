import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Footer() {
    return (
      <Containers>
        <Link to={"/habitos"}><h1>Hábitos</h1></Link>
        
        <Link to={"/hoje"}><Today>Hoje</Today></Link>
        <Link to={"/historico"}><h1>Histórico</h1></Link>
        
      </Containers>
    )}

const Containers= styled.div`
position:fixed;
bottom:0;
left:0;
display:flex;
justify-content:space-around;
align-items:center;
width: 100%;
height: 70px;
background: white;

h1{font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

color: #52B6FF;}`
const Today = styled.button`
width: 91px;
height: 91px;
border-radius:91px;
margin-bottom:50px;
background: #52B6FF;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
display:flex;
justify-content:center;
align-items:center;

color: #FFFFFF;
`