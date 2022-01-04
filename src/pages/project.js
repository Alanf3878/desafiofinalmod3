import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "../components/projects/style";
import Footer from "../components/footer";

import Header from "../components/header";

const Project = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        projects {
          titleproject1
          titleproject2
          titleproject3
          text
          img1 {
            url
          }
          img2 {
            url
          }
          img3 {
            url
          }
        }
      }
    }
  `);

  const {
    titleproject1,
    titleproject2,
    titleproject3,
    text,
    img1,
    img2,
    img3,
  } = data.alldata.projects[0];

  return (
    <S.About>
      <Header />
      <S.Container>
        <S.Section>
          <S.Title>
            <h1>{titleproject1}</h1>
          </S.Title>

          <S.Box>
            <a href="https://epic-hypatia-aec5a3.netlify.app/">
              <S.BoxItem>
                <img src={img1.url} />
              </S.BoxItem>
            </a>
            <S.BoxItemText>
              <p>{text}</p>
            </S.BoxItemText>
          </S.Box>

          <S.Title>
            <h1>{titleproject2}</h1>
          </S.Title>

          <S.Box>
            <a href="https://unruffled-pike-e26ab2.netlify.app">
              <S.BoxItem>
                <img src={img2.url} />
              </S.BoxItem>
            </a>
            <S.BoxItemText>
              <p>{text}</p>
            </S.BoxItemText>
          </S.Box>

          <S.Title>
            <h1>{titleproject3}</h1>
          </S.Title>

          <S.Box>
            <a href="https://naughty-lovelace-6de763.netlify.app">
              <S.BoxItem>
                <img src={img3.url} />
              </S.BoxItem>
            </a>
            <S.BoxItemText>
              <p>{text}</p>
            </S.BoxItemText>
          </S.Box>
        </S.Section>
      </S.Container>
      <Footer />
    </S.About>
  );
};

export default Project;
