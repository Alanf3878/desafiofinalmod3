import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from "gatsby";

const Subcard = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        subcards {
          subcardtext
          success
          subcardtitle
          img {
            url
          }
          img2 {
            url
          }
          addimg {
            url
          }
          titletecnologia
          subcardtecnologia
          imgequal {
            url
          }
          imgsuces {
            url
          }
          text
        }
      }
    }
  `);

  const {
    success,
    imgsuces,
    img,
    img2,
    subcardtext,
    subcardtitle,
    subcardtecnologia,
    addimg,
    titletecnologia,
    text,
    imgequal,
  } = data.alldata.subcards[0];

  return (
    <S.Section>
      <S.Title>
        <h2>Empreendedorismo</h2>
      </S.Title>
      <S.Boxbtn>
        <S.Btn>Saiba-mais</S.Btn>
      </S.Boxbtn>

      <S.Box>
        <S.Cub>
          <p>{subcardtecnologia}</p>

          <S.Contente>
            <img src={img.url} />
            <h2>{titletecnologia}</h2>
          </S.Contente>
        </S.Cub>
        <S.Imgbox>
          <img src={addimg.url} />
        </S.Imgbox>

        <S.Cub>
          <p>{subcardtext}</p>
          <S.Contente>
            <img src={img2.url} />

            <h2>{subcardtitle}</h2>
          </S.Contente>
        </S.Cub>
        <S.Imgequal>
          <img src={imgequal.url} />
        </S.Imgequal>

        <S.Cub>
          <p>{text}</p>
          <S.Contente>
            <img src={imgsuces.url} />
            <h2>{success}</h2>
          </S.Contente>
        </S.Cub>
      </S.Box>

      <S.Text>
        <S.Textbox></S.Textbox>
      </S.Text>
    </S.Section>
  );
};

export default Subcard;
