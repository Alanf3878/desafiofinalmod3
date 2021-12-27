import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from "gatsby";

const Subcard = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        subcards {
          subcardtext
          success
          subcardtitle
          img {
            url
          }
          img2 {
            url
          }
          addimg {
            url
          }
          titletecnologia
          subcardtecnologia
          imgequal {
            url
          }
          imgsuces {
            url
          }
          text
        }
      }
    }
  `);

  const {
    success,
    imgsuces,
    img,
    img2,
    subcardtext,
    subcardtitle,
    subcardtecnologia,
    addimg,
    titletecnologia,
    text,
    imgequal,
  } = data.alldata.subcards[0];

  return (
    <S.Section>
      <S.Title>
        <h2>Empreendedorismo</h2>
      </S.Title>
      <S.Boxbtn>
        <S.Btn>
          <a href="https://endeavor.org.br/desenvolvimento-pessoal/o-que-e-empreendedorismo-da-inspiracao-a-pratica/">
            Saiba-mais
          </a>
        </S.Btn>
      </S.Boxbtn>

      <S.Box>
        <S.Cub>
          <p>{subcardtecnologia}</p>

          <S.Contente>
            <img src={img.url} />
            <h2>{titletecnologia}</h2>
          </S.Contente>
        </S.Cub>
        <S.Imgbox>
          <img src={addimg.url} />
        </S.Imgbox>

        <S.Cub>
          <p>{subcardtext}</p>
          <S.Contente>
            <img src={img2.url} />

            <h2>{subcardtitle}</h2>
          </S.Contente>
        </S.Cub>
        <S.Imgequal>
          <img src={imgequal.url} />
        </S.Imgequal>

        <S.Cub>
          <p>{text}</p>
          <S.Contente>
            <img src={imgsuces.url} />
            <h2>{success}</h2>
          </S.Contente>
        </S.Cub>
      </S.Box>

      <S.Text>
        <S.Textbox>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
          qui do Lorem ipsum, quia dolor sit amet consectetur adipisci[ng]
          velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
          veniam, quis nostrum[d] exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem
          vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil
          molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas
          nulla pariatur? At vero eos et accusamus et iusto odio dignissimos
          ducimus, qui blanditiis praesentium voluptatum deleniti atque
          corrupti, quos dolores et quas molestias excepturi sint, obcaecati
          cupiditate non provident, similique sunt in culpa, qui officia
          deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
          quidem rerum facilis est et expedita distinctio. Nam libero tempore,
          cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus
          id, quod maxime placeat, facere possimus, omnis voluptas assumenda
          est, omnis dolor repellendus. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet, ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat.
        </S.Textbox>
      </S.Text>
    </S.Section>
  );
};

export default Subcard;
