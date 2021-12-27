import React from "react";
import * as S from "./style";

const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.Boxfooter>
          <h3>Adrress</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            perspiciatis ea architecto dolore pariatur error dolor, odit nemo at   
          </p>
        </S.Boxfooter>
        <S.Boxfooter>
          <a>Inicio</a>
          <a>Sobre</a>
          <a>Projetos</a>
          <a>Contatos</a>
        </S.Boxfooter>
        <S.Boxfooter>
          <a>Linkedin</a>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Github</a>
        </S.Boxfooter>
        <S.Boxfooter>
          <a>Saiba-mais</a>
          <a>Empreendoria</a>
        </S.Boxfooter>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
