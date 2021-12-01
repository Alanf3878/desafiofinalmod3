import React from 'react';
import * as S from './style'

const Card = () => {
    const data = useStaticQuery(graphql`
    query {
      alldata {
        cards {
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

  const {
    
  } = data.alldata.cards[0];
  return (
       <S.Section>
              <div>
           <S.Btn>SOPRAVER</S.Btn>
         </div>
         <S.Box>
           <S.Cub>
               <h2>Projetos</h2>
           </S.Cub>
           <S.Cub>
           <h2>Fotos</h2>
           </S.Cub>
         </S.Box>
         <div>
           <S.Btn>SOPRAVER</S.Btn>
         </div>
         <S.Box>
           <S.Cub>
               <h2>Sobre</h2>
               </S.Cub>
           <S.Cub>
           <h2>Sobre</h2>
           </S.Cub>
         </S.Box>
       </S.Section>
      
  );
};

export default Card;