import styled from "styled-components";

export const Container = styled.div`
  max-width: 1333px;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
`;
export const About = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    rgb(11, 17, 31) 0%,
    rgb(15, 23, 42) 100%
  );
`;
export const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Background = styled.div` 
width: 100%;
height: 100vh;
display: flex;

@media (max-width: 900px) {
     flex-wrap: wrap;
    }

`

export const Box = styled.div` 
width: 500px;
padding: 10px;
height: 80%;
margin: 0 auto;
display: flex;
align-content: center;
flex-wrap: wrap;

`

export const BoxInput = styled.div` 
width: 100%;
height: 120px;
display: flex;
flex-direction: column;
padding: 20px;
justify-content: space-around;

input{ 

  height: 50px;
  border: none;
  outline: none;
  border-radius: 10px;
}

h4{ 
  font-size: 30px;
  color: #977c56;
}
button{ 

  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 20px;
  color: #ffff;
  &:hover{ 
    background-color: #977c56;
  }
}
`

export const BoxImg = styled.div` 
width: 50%;


  img{
    width: 100%;
    
  }
  @media (max-width: 900px) {
     height: 30%;
    }


`