import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`;
export const Nav = styled.div`
  height: 100%;
  display: flex;
`;
export const Boxitem = styled.ul`
  max-width: 1333px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
 
  a {
    font-size: 20px;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
`;
export const IconHeader = styled.img`
  width: 25px;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;
export const BoxIcon = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-around;
`;
export const Container = styled.div`
 background-image: linear-gradient(
    0deg,
    rgb(15, 23, 42) 0%,
    rgb(30, 41, 59) 100%
  );
  /* height: 100%; */
`;
