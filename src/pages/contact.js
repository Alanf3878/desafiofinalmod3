import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "../components/contact/style";
import { Link } from "gatsby";
import Footer from "../components/footer";
import Header from "../components/header";
const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        contats {
          img {
            url
          }
          titlename
          titleemail
          titlemens
          btn
        }
      }
    }
  `);

  const { img, titlename, titleemail, titlemens, btn } =
    data.alldata.contats[0];
  return (
    <S.About>
      <Header />
      <S.Container>
        <S.Background>
          <S.BoxImg> <img src ={img.url}/></S.BoxImg>
         
          <S.Box>
            <S.BoxInput>
              <h4>{titlename}</h4>
              <input type="name" />
            </S.BoxInput>
            <S.BoxInput>
              <h4>{titleemail}</h4>
              <input type="email" />
            </S.BoxInput>
            <S.BoxInput>
              <h4>{titlemens}</h4>
              <input type="text" />
            </S.BoxInput>
            <S.BoxInput>
              <button>{btn}</button>
            </S.BoxInput>
          </S.Box>
        </S.Background>
      </S.Container>
      <Footer />
    </S.About>
  );
};

export default Contact;
