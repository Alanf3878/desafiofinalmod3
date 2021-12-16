
import styled from "styled-components";
export const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-around;

img {
  width: 100px;
  @media (max-width: 964px) {
  width:100%;
  
  }
}
@media (max-width: 1175px) {
    
    flex-wrap: wrap;
  }
 

`
export const Cub = styled.div`
background-color: rgb(11, 17, 31);
width: 400px;
height: 420px;
border-radius: 10px;
padding:20px;
position: relative;
overflow: hidden;
display: flex;
align-items: center ;

h2{
  text-transform: uppercase;
  color: #fff;
}
p{
  
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
 
}

`


export const Section = styled.div`
max-width: 1333px;
margin: 0 auto;
height: 100%;
width: 100%;
padding: 2rem;
display: flex;
flex-wrap: wrap;
align-content: flex-start;

justify-content: space-around;
`
export const Btn = styled.button`
width: 200px;
height: 50px;
border: none;
color: #977C56;
background-image: linear-gradient(0deg, rgb(11, 17, 31) 0%, rgb(15, 23, 42) 100%);
&:hover {
  transform: translateY(-5px);
}
`
export const Text = styled.div`
width: 100%;
padding: 3rem;
height: 50vh;
display: flex;
justify-content: center;
text-align: center;
color: #fff;
`

export const Textbox = styled.div`
width:85%;
`
export const Title = styled.div` 
width: 100%;
height: 80px;
display: flex;
justify-content: center;
color: #fff;
font-size: 40px;
@media (max-width: 684px) {
  font-size: 20px;
  }

`
export const Cubtitle = styled.div` 
width: 100%;
padding-top:1rem;
display: flex;
justify-content: center;
color: #fff;
font-size: 35px;
text-transform: uppercase;
`

export const Contente = styled.div` 
width: 100%;
height: 100%;
background-image: linear-gradient(0deg, rgb(11, 17, 31) 0%, rgb(15, 23, 42) 100%);
position: absolute;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: space-between;
z-index: 1;
top: 0;
bottom: 100%;
transition: .5s ease-in-out;
padding: 70px 10px;


&:hover {
  transform: translateY(-100%);
}

img{
  width: 80%;
}


`
export const Imgbox = styled.div` 
 @media (max-width: 964px) {
   display: flex;
   justify-content: center;
  width:100%;
  }
img{
  width: 100px;
}
 
`

export const Boxbtn = styled.div` 
height: 80px;
`
export const Imgequal = styled.div` 
@media (max-width: 964px) {
   display: flex;
   justify-content: center;
  width:100%;
  }

  @media (max-width: 1175px) {
  
  width:100%;
  display: flex;
  justify-content: center;
  }

img{
  width: 100px;
}
`