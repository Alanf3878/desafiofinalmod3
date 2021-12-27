import styled from "styled-components";
export const Footer = styled.div`
  background-image: linear-gradient(
    0deg,
    rgb(11, 17, 31) 0%,
    rgb(15, 23, 42) 100%
  );
  width: 100%;
  height: 30vh;
  @media (max-width: 875px) {
    height: 100%;
  }
`;
export const Container = styled.div`
  max-width: 1333px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  @media (max-width: 875px) {
    height: 500px;
    flex-wrap: wrap;
    align-content: space-evelyn;
  }
`;
export const Boxfooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  height: 200px;
  align-content: space-around;
  color: #977c56;
 

  a{
    width: 100%;
    text-align: center;
    color: #977c56;
    
  }

  @media (max-width: 875px) {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;

  a{
    width: 100px;
    
  }
  }
`;
