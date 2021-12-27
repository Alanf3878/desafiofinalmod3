import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "../components/projects/style";
import Footer from "../components/footer";
import { Link } from "gatsby";
const Project = () => {
  return (
    <S.About>
      <S.Container>
        <S.Header>
          <Link to="/">home</Link>
          <Link to="/contact">contato</Link>
          <Link to="/about">sobre</Link>
          <Link to="/project">projetos</Link>
        </S.Header>
        <S.Section>
        <S.Title>
              <h1>Section Lanches</h1>
            </S.Title>
          
          <S.Box>
            <S.BoxItem>
              <img src=" https://d33wubrfki0l68.cloudfront.net/61a8e5a07a0216260740b6dd/screenshot_2021-12-02-15-28-35-0000.png" />
            </S.BoxItem>
            <S.BoxItemText>
              <p>
                The Lorem ipsum text is derived from sections 1.10.32 and
                1.10.33 of Cicero's 'De finibus bonorum et malorum'. The
                physical source may have been the 1914 Loeb Classical Library
                edition of De finibus, where the Latin text
              </p>
            </S.BoxItemText>
          
          </S.Box>
          <S.Title>
              <h1>Section Lanches</h1>
            </S.Title>
          <S.Box>
            <S.BoxItem>
              <img src=" https://d33wubrfki0l68.cloudfront.net/61a8e4a9704d8b1eae087282/screenshot_2021-12-02-15-24-23-0000.png" />
            </S.BoxItem>
            <S.BoxItemText>
              <p>
                The Lorem ipsum text is derived from sections 1.10.32 and
                1.10.33 of Cicero's 'De finibus bonorum et malorum'. The
                physical source may have been the 1914 Loeb Classical Library
                edition of De finibus, where the Latin text
              </p>
            </S.BoxItemText>
          </S.Box>
          <S.Title>
            <h1>Section Lanches</h1>
          </S.Title>
          <S.Box>
            <S.BoxItem>
              <img src="https://d33wubrfki0l68.cloudfront.net/6169e21870b52a00080582e2/screenshot_2021-10-15-20-19-13-0000.png" />
            </S.BoxItem>
            <S.BoxItemText>
              <p>
                The Lorem ipsum text is derived from sections 1.10.32 and
                1.10.33 of Cicero's 'De finibus bonorum et malorum'. The
                physical source may have been the 1914 Loeb Classical Library
                edition of De finibus, where the Latin text
              </p>
            </S.BoxItemText>
          </S.Box>
        </S.Section>
      </S.Container>
      <Footer/>
    </S.About>
    
  );
};

export default Project;
