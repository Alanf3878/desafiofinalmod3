import React from "react";
import { graphql,useStaticQuery } from "gatsby";
import * as S from '../components/contact/style';
import { Link } from "gatsby";
const Contact = () => {
    return ( 
        <S.About>
            <S.Container>
                <S.Header>
                <Link to = "/">home</Link>   
                <Link to = "/contact">contato</Link> 
                <Link to = "/about">sobre</Link>
                <Link to = "/project">projetos</Link>
                </S.Header>
            </S.Container>

        </S.About>
     );
}
 
export default Contact;