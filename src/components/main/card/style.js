import styled from "styled-components";
export const Box = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1175px) {
    height: 720px;
    flex-wrap: wrap;
  }
`;
export const Cub = styled.div`
  background-image: url(${(props) => props.back});
  background-size: 40%;
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;
  background-color: rgb(11, 17, 31);
  width: 550px;
  height: 250px;
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  h2 {
    color: #fff;
    
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }

  @media (max-width: 1175px) {
    width: 800px;
  }
`;

export const Section = styled.div`
  max-width: 1333px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
`;
export const Btn = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  color: #977c56;
  background-image: linear-gradient(
    0deg,
    rgb(11, 17, 31) 0%,
    rgb(15, 23, 42) 100%
  );
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
`;
