import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from "gatsby";

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
          <Link to="/">
            <a>{home}</a>
          </Link>
          <Link to="/contact">
            <a>{contato}</a>
          </Link>
          <Link to="/about">
            <a>{sobre}</a>
          </Link>
          <Link to="/project">
            <a>{projetos}</a>
          </Link>
          <S.BoxIcon>
            <a href="https://www.instagram.com/alanfernandis/">
              <S.IconHeader src={iconinsta.url} />
            </a>
            <a href="https://www.facebook.com/alan.donatelo">
              <S.IconHeader src={iconface.url} />
            </a>
            <a href="https://www.linkedin.com/in/alan-fernandes-64483221b/">
              <S.IconHeader src={iconlinkedin.url} />
            </a>
            <a href="https://www.github.com/Alanf3878">
              <S.IconHeader src={icongithub.url} />
            </a>
          </S.BoxIcon>
        </S.Boxitem>
      </S.Header>
    </S.Container>
  );
};

export default Header;
