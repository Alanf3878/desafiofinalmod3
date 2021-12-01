
import styled from "styled-components";
export const Box = styled.div`

width: 100%;
height: 350px;
display: flex;
align-items: center;
justify-content: space-evenly;

`
export const Cub = styled.div`
background-color: gold;
width: 550px;
height: 250px;
display: flex;
align-items: center;
justify-content: center;
&:hover {
  cursor: pointer;
  transform: translateY(-5px);
}
`

export const Section = styled.div`
max-width: 1333px;
margin: 0 auto;
width: 100%;
height: 100%;
padding:2rem;
display: flex;
flex-wrap: wrap;

`
export const Btn = styled.button`
width: 200px;
height: 50px;
border: none;
color: #fff;
background-image: linear-gradient(0deg, rgb(11, 17, 31) 0%, rgb(15, 23, 42) 100%);
&:hover {
  cursor: pointer;
  transform: translateY(-5px);
}
`