import React from "react";
import { graphql,useStaticQuery } from "gatsby";
import * as S from '../components/projects/style';
import { Link } from "gatsby";
const Project = () => {
    return ( 
        <S.About>
        <S.Container>
            <S.Header>
            <Link to = "/">home</Link>   
            <Link to = "/contact">contato</Link> 
            <Link to = "/about">sobre</Link>
            <Link to = "/project">projetos</Link>
            </S.Header>
            <div></div>
        </S.Container>
        

    </S.About>
     );
}
 
export default Project;