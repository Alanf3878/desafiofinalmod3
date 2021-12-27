import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "../components/about/style";
import { Link } from "gatsby";
import Footer from "../components/footer";
const About = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        abouts {
          home
          contact
          projects
          photo {
            url
          }
          text
          title
        }
      }
    }
  `);

  const { home, contact, projects, photo, text, title } =
    data.alldata.abouts[0];
  return (
    <S.About>
      <S.Container>
        <S.Header>
          <Link to="/">{home}</Link>
          <Link to="/contact">{contact}</Link>
          <Link to="/project">{projects}</Link>
        </S.Header>
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
