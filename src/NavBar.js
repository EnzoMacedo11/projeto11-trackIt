import styled from "styled-components"

export default function Navbar(){
    return(
        <Container>
            <h1>TrackIt</h1>
            <img src="https://cdn.realsport101.com/images/ncavvykf/epicstream/c214985c332ace152aa28294d0ca77ba17fa2166-760x400.jpg?rect=25,0,711,400&w=700&h=394&dpr=2"/>
        </Container>
    )
}

const Container = styled.div`
width:100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
h1{
    margin-left:18px;
    font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;

color: #FFFFFF;
}
img{
    margin-right:10px;
width: 51px;
height: 51px;
border-radius: 98.5px;
}
`