import styled from "styled-components";

export const Container = styled.div`
  max-width: 1333px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;
export const About = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    rgb(15, 23, 42) 0%,
    rgb(30, 41, 59) 100%
  );
`;
export const Header = styled.div`
  width: 80%;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding-bottom: 3rem;
`;
export const Title = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 350px;
  background-image: linear-gradient(
    0deg,
    rgb(11, 17, 31) 0%,
    rgb(15, 23, 42) 100%
  );
  display: flex;

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
  }

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
    height: 500px;
  }
`;
export const BoxItem = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 75%;
    @media (max-width: 1000px) {
      width: 100%;
    }
    @media (max-width: 664px) {
      width: 50%;
    }
  }
`;
export const BoxItemText = styled.div`
  width: 500px;

  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
  }

  p {
    text-align: center;
    color: #977c56;
  }
`;
