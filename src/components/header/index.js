import React from "react";
import * as S from "./style";
import { graphql,useStaticQuery } from "gatsby";
import Home from "./home";
import { Link } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          home
          soci
          sobre
          contato
          projetos
          iconinsta {
            url
          }
          iconface {
            url
          }
          iconlinkedin {
            url
          }
          icongithub {
            url
          }
        }
      }
    }
  `);

  const {
    home,
    soci,
    sobre,
    contato,
    projetos,
    iconinsta,
    iconface,
    iconlinkedin,
    icongithub,
  } = data.alldata.headers[0];

  return (
    <S.Container>
      <S.Header>
      <S.Boxitem>
        <Link to = "/">{home}</Link>   
        <Link to = "/contact">{contato}</Link> 
        <Link to = "/about">{sobre}</Link>
        <Link to = "/project">{projetos}</Link>
        <S.BoxIcon>
        <S.IconHeader src={iconinsta.url} />
        <S.IconHeader src={iconface.url} />
        <S.IconHeader src={iconlinkedin.url} />
        <S.IconHeader src={icongithub.url} />
      </S.BoxIcon>
      </S.Boxitem>
     
    </S.Header>
    <Home/>

    </S.Container>
    

  );
};

export default Header;
