import React from "react";
import Card from "./card";
import Subcard from "./subcard";
import * as S from "./style";
import Home from "./home";

const Main = () => {
  return (
    <S.Main>
      <Home/>
      <Card />
      <Subcard />
    </S.Main>
  );
};

export default Main;
