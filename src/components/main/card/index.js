import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
const Card = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        cards {
          img1 {
            url
          }
          img2 {
            url
          }
          img3 {
            url
          }
          img4 {
            url
          }
          titlecard
          subtitle
          btncard
        }
      }
    }
  `);

  const { img1, img2, img3, img4, titlecard, subtitle, btncard } =
    data.alldata.cards[0];
  return (
    <S.Section>
      <div>
        <S.Btn>{btncard}</S.Btn>
      </div>

      <S.Box>
        <S.Cub back={img1.url}>
          <Link to="/project">
            <h2>Projetos</h2>
          </Link>
        </S.Cub>
        <S.Cub back={img2.url}>
          <h2>Fotos</h2>
        </S.Cub>
      </S.Box>
      <div>
        <S.Btn>{btncard}</S.Btn>
      </div>
      <S.Box>
        <S.Cub back={img3.url}>
          <Link to="/about">
            <h2>Sobre</h2>
          </Link>
        </S.Cub>
        <S.Cub back={img4.url}>
          <a href="https://epic-hypatia-aec5a3.netlify.app/"><h2>Empresa</h2></a>
        </S.Cub>
      </S.Box>
    </S.Section>
  );
};

export default Card;
