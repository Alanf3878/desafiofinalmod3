import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "../components/about/style";
import { Link } from "gatsby";
import Footer from "../components/footer";
import  Header  from "../components/header";
const About = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        abouts {
          photo {
            url
          }
          text
          title
        }
      }
    }
  `);

  const {  photo, text, title } =
    data.alldata.abouts[0];
  return (
    <S.About>
      <Header/>
      <S.Container>
      
      </S.Container>
      <S.Homeabout>
        <S.Title>
          <h1>{title}</h1>
        </S.Title>
        <img src={photo.url} />
        <S.Text>
          <p>{text}</p>
        </S.Text>
      </S.Homeabout>
      <Footer/>
    </S.About>
    
  );
};
export default About;
