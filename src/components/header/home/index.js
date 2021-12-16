import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from "gatsby";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        homes {
          imghome {
            url
          }
          imghome2 {
            url
          }
          imghome3 {
            url
          }
          imghome4 {
            url
          }
          title
          subtitle
          text
        }
      }
    }
  `);

  const { imghome, title, subtitle, text, imghome2, imghome3, imghome4 } =
    data.alldata.homes[0];

  return (
    <div>
      <>
        <S.Imghome>
          <S.BoxImg>
            <img src={imghome.url} />
          </S.BoxImg>
        </S.Imghome>
      </>
      <S.Section>
        <S.Subtitle>
          <h1>{subtitle}</h1>
        </S.Subtitle>
        <S.Text>
          <S.Boxtext>
            <p>{text}</p>
          </S.Boxtext>
        </S.Text>
      </S.Section>
    </div>
  );
};

export default Home;
