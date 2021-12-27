import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        footers {
          adress
          text
          home
          about
          projet
          contact
          linkedin
          facebook
          instagram
          github
          link
          linkwork
         
        }
      }
    }
  `);

  const {
    adress,
          text,
          home,
          about,
          projet,
          contact,
          linkedin,
          facebook,
          instagram,
          github,
          link,
          linkwork
  } = data.alldata.footers[0];
  return (
    <S.Footer>
      <S.Container>
        <S.Boxfooter>
          <h3>{adress}</h3>
          <p>
           {text} 
          </p>
        </S.Boxfooter>
        <S.Boxfooter>
         <Link to="/"> <a>{home}</a></Link>
         <Link to="/about"> <a>{about}</a></Link>
         <Link to="/project"> <a>{projet}</a></Link>
         <Link to="/contact"> <a>{contact}</a></Link>
        </S.Boxfooter>
        <S.Boxfooter>
         <a href = "https://www.linkedin.com/in/alan-fernandes-64483221b/">{linkedin}</a>
         <a href = "https://www.facebook.com/alan.donatelo" >{facebook}</a>
         <a href = "https://www.instagram.com/alanfernandis/" >{instagram}</a>
         <a href = "https://github.com/Alanf3878" >{github}</a>
        </S.Boxfooter>
        <S.Boxfooter>
         <a>{link}</a>
         <a>{linkwork}</a>
        </S.Boxfooter>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
